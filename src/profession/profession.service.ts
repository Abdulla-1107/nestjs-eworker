import {
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
      const profession = await this.prisma.profession.create({
        data: { ...createProfessionDto, isActive: true },
      });
      return { data: profession };
    } catch (error) {
      throw new InternalServerErrorException(`Erorr ${error.message}`);
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
      sortBy = 'name_uz', // Agar bunday ustun bo‘lmasa, 'name_uz' qilib qo‘ying
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

    const [data, total] = await this.prisma.$transaction([
      this.prisma.profession.findMany({
        include: {
          MasterProfession: { include: { Master: true } },
          professionLevel: { include: { Level: true } },
        },
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy || 'name_uz']: sortOrder, // fallback to name_uz
        },
      }),
      this.prisma.profession.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
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

  async update(id: string, updateProfessionDto: UpdateProfessionDto) {
    const profession = await this.prisma.profession.findFirst({
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    const Newprofession = await this.prisma.profession.update({
      where: { id },
      data: updateProfessionDto,
    });

    return { data: Newprofession };
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
