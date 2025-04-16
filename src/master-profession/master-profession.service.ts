import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateMasterProfessionDto } from './dto/create-master-profession.dto';
import { UpdateMasterProfessionDto } from './dto/update-master-profession.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MasterProfessionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMasterProfessionDto: CreateMasterProfessionDto) {
    const profession = await this.prisma.profession.findFirst({
      where: { id: createMasterProfessionDto.professionId },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    const level = await this.prisma.level.findFirst({
      where: { id: createMasterProfessionDto.levelId },
    });
    if (!level) {
      throw new NotFoundException('Level topilmadi');
    }
    const master = await this.prisma.master.findFirst({
      where: { id: createMasterProfessionDto.masterId },
    });
    if (!master) {
      throw new NotFoundException('Master topilmadi');
    }
    try {
      const masterProfession = await this.prisma.masterProfession.create({
        data: createMasterProfessionDto,
      });
      return { data: masterProfession };
    } catch (error) {
      throw new BadRequestException('Yaratishda xatolik yuz berdi');
    }
  }

  async findAll() {
    const data = await this.prisma.masterProfession.findMany();
    return { data };
  }

  async findOne(id: string) {
    const masterProfession = await this.prisma.masterProfession.findUnique({
      where: { id },
    });

    if (!masterProfession) {
      throw new NotFoundException(`ID: ${id} bo‘yicha ma’lumot topilmadi`);
    }

    return { data: masterProfession };
  }

  async update(id: string, updateDto: UpdateMasterProfessionDto) {
    const existing = await this.prisma.masterProfession.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException(`Yangilash uchun ID: ${id} topilmadi`);
    }

    try {
      const updated = await this.prisma.masterProfession.update({
        where: { id },
        data: updateDto,
      });

      return { message: 'Muvaffaqiyatli yangilandi', data: updated };
    } catch (error) {
      throw new BadRequestException('Yangilashda xatolik yuz berdi');
    }
  }
  async remove(id: string) {
    const masterProfession = await this.prisma.masterProfession.findUnique({
      where: { id },
    });

    if (!masterProfession) {
      throw new NotFoundException(`O'chirish uchun data topilmadi`);
    }

    const deleteData = await this.prisma.masterProfession.delete({
      where: { id },
    });

    return { data: deleteData };
  }
}
