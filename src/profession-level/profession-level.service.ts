import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessionLevelDto } from './dto/create-profession-level.dto';
import { UpdateProfessionLevelDto } from './dto/update-profession-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessionLevelService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfessionLevelDto: CreateProfessionLevelDto) {
    const level = await this.prisma.level.findFirst({
      where: { id: createProfessionLevelDto.levelId },
    });
    if (!level) {
      throw new NotFoundException('Level topilmadi');
    }
    const profession = await this.prisma.profession.findFirst({
      where: { id: createProfessionLevelDto.professionId },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    const data = await this.prisma.professionLevel.create({
      data: createProfessionLevelDto,
    });
    return { data };
  }

  async findAll() {
    return {
      data: await this.prisma.professionLevel.findMany({
        include: {
          Level: true,
          Profession: true,
        },
      }),
    };
  }

  async findOne(id: string) {
    const data = await this.prisma.professionLevel.findFirst({
      where: { id },
      include: {
        Level: true,
        Profession: true,
      },
    });
    if (!data) {
      throw new NotFoundException('Idga tegishli Data Topilmadi');
    }
    return { data };
  }

  async update(id: string, updateProfessionLevelDto: UpdateProfessionLevelDto) {
    const data = await this.prisma.professionLevel.findFirst({ where: { id } });
    if (!data) {
      throw new NotFoundException('Idga tegishli Data Topilmadi');
    }
    const level = await this.prisma.level.findFirst({
      where: { id: updateProfessionLevelDto.levelId },
    });
    if (!level) {
      throw new NotFoundException('Level topilmadi');
    }
    const profession = await this.prisma.profession.findFirst({
      where: { id: updateProfessionLevelDto.professionId },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }

    const newData = await this.prisma.professionLevel.update({
      where: { id },
      data: updateProfessionLevelDto,
    });
    return { data: newData };
  }

  async remove(id: string) {
    const data = await this.prisma.professionLevel.findFirst({ where: { id } });
    if (!data) {
      throw new NotFoundException('Idga tegishli Data Topilmadi');
    }
    const deleteData = await this.prisma.professionLevel.delete({
      where: { id },
    });
    return { data: deleteData };
  }
}
