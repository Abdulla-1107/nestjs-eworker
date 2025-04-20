import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { MasterQueryDto } from './dto/master-query.dto';

@Injectable()
export class MasterService {
  constructor(private readonly prisma: PrismaService) {}
  async createMaster(dto: CreateMasterDto) {
    const existingMaster = await this.prisma.master.findFirst({
      where: { phone: dto.phone },
    });

    if (existingMaster) {
      throw new BadRequestException('Telefon raqam foydalanilgan');
    }

    for (const item of dto.MasterProfession ?? []) {
      const profession = await this.prisma.profession.findUnique({
        where: { id: item.professionId },
      });
      if (!profession) {
        throw new NotFoundException(
          `Profession topilmadi: ${item.professionId}`,
        );
      }

      const level = await this.prisma.level.findUnique({
        where: { id: item.levelId },
      });
      if (!level) {
        throw new NotFoundException(`Level topilmadi: ${item.levelId}`);
      }
    }

    // 1. master ni yaratamiz
    const master = await this.prisma.master.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        birthYear: dto.birthYear,
        about: dto.about,
        isActive: dto.isActive ?? true,
        image: dto.image,
        passportImg: dto.passportImg,
        createdAt: dto.createdAt ?? new Date(),
      },
    });

    if (dto.MasterProfession?.length) {
      await this.prisma.masterProfession.createMany({
        data: dto.MasterProfession.map((profession) => ({
          masterId: master.id,
          professionId: profession.professionId,
          levelId: profession.levelId,
          minWorkingHours: profession.minWorkingHours,
          priceHourly: profession.priceHourly,
          priceDaily: profession.priceDaily,
          experience: profession.experience,
        })),
      });
    }

    const result = await this.prisma.master.findUnique({
      where: { id: master.id },
      include: { MasterProfession: true },
    });

    return { data: result };
  }

  async findAll(query: MasterQueryDto) {
    const {
      search,
      isActive,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 10,
    } = query;
  
    const skip = (page - 1) * limit < 0 ? 0 : (page - 1) * limit;
  
    const where: any = {};
  
    // Filter
    if (typeof isActive == 'boolean') {
      where.isActive = isActive;
    }
  
    // Search (firstName, lastName, phone, about)
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { about: { contains: search, mode: 'insensitive' } },
      ];
    }
  
    const [data, total] = await this.prisma.$transaction([
      this.prisma.master.findMany({
        include: {
          MasterProfession: { include: { Level: true, Pofession: true } },
        },
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      this.prisma.master.count({ where }),
    ]);
  
    return {
      data,
      total,
      page,
      limit,
    };
  }
  

  async findOne(id: string) {
    const master = await this.prisma.master.findFirst({ where: { id } });
    if (!master) {
      throw new NotFoundException('Master topilmadi');
    }

    return { data: master };
  }

  async update(id: string, dto: UpdateMasterDto) {
    const existingMaster = await this.prisma.master.findUnique({
      where: { id },
    });
  
    if (!existingMaster) {
      throw new NotFoundException(`Master topilmadi: ${id}`);
    }
       // MasterProfession yangilash uchun tekshiruv
       if (dto.MasterProfession?.length) {
        for (const item of dto.MasterProfession) {
          const profession = await this.prisma.profession.findUnique({
            where: { id: item.professionId },
          });
          if (!profession) {
            throw new NotFoundException(
              `Profession topilmadi: ${item.professionId}`,
            );
          }
    
          const level = await this.prisma.level.findUnique({
            where: { id: item.levelId },
          });
          if (!level) {
            throw new NotFoundException(`Level topilmadi: ${item.levelId}`);
          }
        }
      }
  
    // Telefon raqam o'zgarayotgan bo‘lsa va boshqa masterga tegishli bo‘lsa
    if (dto.phone && dto.phone !== existingMaster.phone) {
      const phoneTaken = await this.prisma.master.findFirst({
        where: {
          phone: dto.phone,
          NOT: { id },
        },
      });
      if (phoneTaken) {
        throw new BadRequestException('Bu telefon raqam boshqa masterga tegishli');
      }
    }

  
    // 1. Masterni update qilish
    const updatedMaster = await this.prisma.master.update({
      where: { id },
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        birthYear: dto.birthYear,
        about: dto.about,
        isActive: dto.isActive,
        image: dto.image,
        passportImg: dto.passportImg,
        createdAt: dto.createdAt,
      },
    });
  
    // 2. Agar MasterProfession kelsa, eski bog‘lanishlarni o‘chirib, yangisini yozamiz
    if (dto.MasterProfession?.length) {
      await this.prisma.masterProfession.deleteMany({
        where: { masterId: id },
      });
  
      await this.prisma.masterProfession.createMany({
        data: dto.MasterProfession.map((profession) => ({
          masterId: id,
          professionId: profession.professionId,
          levelId: profession.levelId,
          minWorkingHours: profession.minWorkingHours,
          priceHourly: profession.priceHourly,
          priceDaily: profession.priceDaily,
          experience: profession.experience,
        })),
      });
    }
  
    // 3. Yangilangan masterni to‘liq ma'lumot bilan qaytaramiz
    const result = await this.prisma.master.findUnique({
      where: { id },
      include: { MasterProfession: true },
    });
  
    return { data: result };
  }
  

  async remove(id: string) {
    const master = await this.prisma.master.findFirst({ where: { id } });
    if (!master) {
      throw new NotFoundException('Master topilmadi');
    }
    const deleteMaster = await this.prisma.master.delete({ where: { id } });
    return { data: deleteMaster };
  }
}
