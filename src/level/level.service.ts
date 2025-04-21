import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from '../prisma/prisma.service'; // Prisma service
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class LevelService {
  constructor(private prisma: PrismaService) {}

  // Yangi daraja yaratish
  async create(createLevelDto: CreateLevelDto) {
    const regionname = await this.prisma.level.findFirst({
      where: { name_en: createLevelDto.name_en },
    });
    if (regionname) {
      throw new BadRequestException('Level mavjud');
    }
    try {
      return await this.prisma.level.create({
        data: {
          name_uz: createLevelDto.name_uz,
          name_ru: createLevelDto.name_ru,
          name_en: createLevelDto.name_en,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Daraja yaratishda xatolik yuz berdi',
      );
    }
  }

  // Barcha darajalarni olish
  async findAll(query: {
    page: number;
    limit: number;
    search?: string;
    searchField: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    filterField?: string;
    filterValue?: string;
  }) {
    const {
      page,
      limit,
      search,
      searchField,
      sortBy,
      sortOrder,
      filterField,
      filterValue,
    } = query;

    const skip = (page - 1) * limit;

    const allowedFields = ['createdAt', 'name_uz', 'name_ru', 'name_en'];

    if (!allowedFields.includes(sortBy)) {
      throw new NotFoundException(`Saralash maydoni topilmadi: ${sortBy}`);
    }

    if (search && !allowedFields.includes(searchField)) {
      throw new NotFoundException(`Qidiruv maydoni topilmadi: ${searchField}`);
    }

    const where: any = {};

    // Qidiruv shartlarini qo'shish
    if (search) {
      where[searchField] = {
        contains: search,
        mode: 'insensitive',
      };
    }

    // Filtrlash shartlarini qo'shish
    if (filterField && filterValue) {
      if (!allowedFields.includes(filterField)) {
        throw new NotFoundException(
          `Filtrlash maydoni topilmadi: ${filterField}`,
        );
      }
      where[filterField] = {
        contains: filterValue,
        mode: 'insensitive',
      };
    }

    try {
      const [data, total] = await this.prisma.$transaction([
        this.prisma.level.findMany({
          where,
          skip,
          take: limit,
          orderBy: {
            [sortBy]: sortOrder,
          },
        }),
        this.prisma.level.count({ where }),
      ]);

      return {
        data,
        meta: {
          total,
          page,
          limit,
          lastPage: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new BadRequestException(
        'Darajalarni olishda xatolik yuz berdi',
      );
    }
  }

  // Bir darajani olish
  async findOne(id: string) {
    try {
      const level = await this.prisma.level.findUnique({
        where: { id },
      });

      if (!level) {
        throw new NotFoundException(`Daraja topilmadi: ${id}`);
      }

      return level;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Agar NotFoundException bo'lsa, uni qaytarish
      }
      throw new InternalServerErrorException(
        `Daraja olishda xatolik yuz berdi: ${id}`,
      );
    }
  }

  // Darajani yangilash
  async update(id: string, updateLevelDto: UpdateLevelDto) {
    try {
      const level = await this.prisma.level.update({
        where: { id },
        data: {
          name_uz: updateLevelDto.name_uz,
          name_ru: updateLevelDto.name_ru,
          name_en: updateLevelDto.name_en,
        },
      });

      if (!level) {
        throw new NotFoundException(`Daraja topilmadi: ${id}`);
      }

      return level;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Agar NotFoundException bo'lsa, uni qaytarish
      }
      throw new NotFoundException(`Daraja topilmadi: ${id}`);
    }
  }

  // Darajani o'chirish
  async remove(id: string) {
    try {
      const level = await this.prisma.level.delete({
        where: { id },
      });

      if (!level) {
        throw new NotFoundException(`Daraja topilmadi: ${id}`);
      }

      return { message: `Daraja muvaffaqiyatli o'chirildi: ${id}` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`Daraja topilmadi: ${id}`);
    }
  }
}
