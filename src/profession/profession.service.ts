import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProfessionDto: CreateProfessionDto) {
    try {
      // 1. Professionni yaratish
      const profession = await this.prisma.profession.create({
        data: {
          name_uz: createProfessionDto.name_uz,
          name_ru: createProfessionDto.name_ru,
          name_en: createProfessionDto.name_en,
          image: createProfessionDto.image,
          isActive: createProfessionDto.isActive ?? true, // nullish coalescing
        },
      });

      // 2. professionLevel larni yaratish
      if (
        createProfessionDto.professionLevel &&
        createProfessionDto.professionLevel.length > 0
      ) {
        // Level mavjudligini tekshirish
        for (const item of createProfessionDto.professionLevel) {
          const levelExists = await this.prisma.level.findUnique({
            where: { id: item.levelId },
          });

          if (!levelExists) {
            throw new NotFoundException(`Level topilmadi`);
          }
        }

        // Yaratish
        await this.prisma.professionLevel.createMany({
          data: createProfessionDto.professionLevel.map((item) => ({
            professionId: profession.id,
            levelId: item.levelId,
            minWorkingHours: item.minWorkingHours,
            priceHourly: item.priceHourly,
            priceDaily: item.priceDaily,
          })),
        });
      }

      // 3. professionTools ni qo‘shish
      if (
        createProfessionDto.professionTools &&
        createProfessionDto.professionTools.length > 0
      ) {
        // Tool lar mavjudligini tekshirish (ixtiyoriy, xavfsizlik uchun)
        for (const toolId of createProfessionDto.professionTools) {
          const toolExists = await this.prisma.tool.findUnique({
            where: { id: toolId },
          });

          if (!toolExists) {
            throw new NotFoundException(`Tool topilmadi: ${toolId}`);
          }
        }

        // createMany
        await this.prisma.professionTool.createMany({
          data: createProfessionDto.professionTools.map((toolId) => ({
            professionId: profession.id,
            toolId: toolId,
          })),
        });
      }

      // 4. Javob qaytarish
      const result = await this.prisma.profession.findUnique({
        where: { id: profession.id },
        include: {
          professionLevel: true,
          professionTool: true,
        },
      });

      return { data: result };
    } catch (error) {
      throw new NotFoundException(`${error.message}`);
    }
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    isActive?: boolean;
  }) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'name_uz', // default 'name_uz'
      sortOrder = 'asc',
      isActive,
    } = query;

    const where: any = {};

    if (search) {
      where.OR = [
        { name_uz: { contains: search, mode: 'insensitive' } },
        { name_ru: { contains: search, mode: 'insensitive' } },
        { name_en: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    // Validatsiya sortBy ustuni bo‘yicha
    const validSortByFields = ['name_uz', 'name_ru', 'name_en', 'createdAt']; // Qo'llab-quvvatlanadigan ustunlar
    if (sortBy && !validSortByFields.includes(sortBy)) {
      throw new BadRequestException(`Invalid sortBy field: ${sortBy}`);
    }

    // Sahifa va limitni tekshirish
    const validPage = page > 0 ? page : 1; // Sahifa 1 dan kichik bo‘lmasligi kerak
    const validLimit = limit > 0 ? limit : 10; // Limit 1 dan kichik bo‘lmasligi kerak

    const [data, total] = await this.prisma.$transaction([
      this.prisma.profession.findMany({
        include: {
          MasterProfession: { include: { Master: true } },
          professionLevel: { include: { Level: true } },
        },
        where,
        skip: (validPage - 1) * validLimit,
        take: validLimit,
        orderBy: {
          [sortBy]: sortOrder, // Saralash
        },
      }),
      this.prisma.profession.count({ where }),
    ]);

    return {
      data,
      total,
      page: validPage,
      limit: validLimit,
      totalPages: Math.ceil(total / validLimit),
    };
  }

  async findOne(id: string) {
    const profession = await this.prisma.profession.findFirst({
      include: {
        MasterProfession: { include: { Master: true } },
        professionLevel: { include: { Level: true } },
      },
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    return { data: profession };
  }

  async update(id: string, dto: UpdateProfessionDto) {
    // 1. Profession mavjudligini tekshirish
    const profession = await this.prisma.profession.findUnique({
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }

    // 2. professionni yangilash
    await this.prisma.profession.update({
      where: { id },
      data: {
        name_uz: dto.name_uz ?? profession.name_uz,
        name_ru: dto.name_ru ?? profession.name_ru,
        name_en: dto.name_en ?? profession.name_en,
        image: dto.image ?? profession.image,
        isActive: dto.isActive ?? profession.isActive,
      },
    });

    // 3. professionLevel-larni yangilash
    if (dto.professionLevel?.length) {
      await this.prisma.professionLevel.deleteMany({
        where: { professionId: id },
      });

      for (const item of dto.professionLevel) {
        const levelExists = await this.prisma.level.findUnique({
          where: { id: item.levelId },
        });
        if (!levelExists) {
          throw new NotFoundException(`Level topilmadi`);
        }
      }

      await this.prisma.professionLevel.createMany({
        data: dto.professionLevel.map((item) => ({
          professionId: id,
          levelId: item.levelId,
          minWorkingHours: item.minWorkingHours,
          priceHourly: item.priceHourly,
          priceDaily: item.priceDaily,
        })),
      });
    }

    // 4. professionTools-larni yangilash
    if (dto.professionTools?.length) {
      // a. Eski professionTools-larni o‘chirib yuboramiz
      await this.prisma.professionTool.deleteMany({
        where: { professionId: id },
      });

      // b. Har bir toolId ni tekshirish (optional, xavfsizlik uchun)
      for (const toolId of dto.professionTools) {
        const toolExists = await this.prisma.tool.findUnique({
          where: { id: toolId },
        });
        if (!toolExists) {
          throw new NotFoundException(`Tool topilmadi: ${toolId}`);
        }
      }

      // c. Yangi professionTool-larni create qilamiz
      await this.prisma.professionTool.createMany({
        data: dto.professionTools.map((toolId) => ({
          professionId: id,
          toolId: toolId,
        })),
      });
    }

    // 5. Yakuniy natijani qaytaramiz
    const updated = await this.prisma.profession.findUnique({
      where: { id },
      include: {
        professionLevel: true,
        professionTool: true,
      },
    });

    return { data: updated };
  }

  async remove(id: string) {
    const profession = await this.prisma.profession.findFirst({
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }

    const Newprofession = await this.prisma.profession.delete({
      where: { id },
    });

    return { data: Newprofession };
  }
}
