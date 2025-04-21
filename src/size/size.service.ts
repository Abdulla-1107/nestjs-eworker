import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Prisma servisini import qilish
import { SizeQueryDto } from './dto/size-query.dto';

@Injectable()
export class SizeService {
  constructor(private readonly prisma: PrismaService) {} // Prisma servisiga ulanish

  // Yangi hajm qo'shish
  async create(createSizeDto: CreateSizeDto) {
    try {
      const size = await this.prisma.size.create({
        data: {
          name_uz: createSizeDto.name_uz,
          name_ru: createSizeDto.name_ru,
          name_en: createSizeDto.name_en,
        },
      });
      return { data: size }; // Yaratilgan hajmni qaytarish
    } catch (error) {
      throw new InternalServerErrorException(
        'Hajm yaratishda xatolik yuz berdi',
      );
    }
  }

  async findAll(query: SizeQueryDto): Promise<{ data: any[]; total: number }> {
    const {
      search,
      page = 1,
      limit = 10,
      sortBy = 'name_uz',
      sortOrder = 'asc',
      name_uz,
      name_ru,
      name_en,
    } = query;

    // page ni number ga aylantirish va tekshirish
    const pageNumber = typeof page === 'string' ? parseInt(page, 10) : page;
    if (isNaN(pageNumber) || pageNumber < 1) {
      throw new BadRequestException('page must be a valid positive integer');
    }

    // limit ni number ga aylantirish va tekshirish
    const limitNumber = typeof limit === 'string' ? parseInt(limit, 10) : limit;
    if (isNaN(limitNumber) || limitNumber < 1) {
      throw new BadRequestException('limit must be a valid positive integer');
    }

    // Pagination
    const take = limitNumber;
    const skip = (pageNumber - 1) * take;

    // Where shartlari
    const where: any = {};

    // Search
    if (search) {
      where.OR = [
        { name_uz: { contains: search, mode: 'insensitive' } },
        { name_ru: { contains: search, mode: 'insensitive' } },
        { name_en: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Filter
    if (name_uz) {
      where.name_uz = { contains: name_uz, mode: 'insensitive' };
    }
    if (name_ru) {
      where.name_ru = { contains: name_ru, mode: 'insensitive' };
    }
    if (name_en) {
      where.name_en = { contains: name_en, mode: 'insensitive' };
    }

    // Ma'lumotlarni olish
    const data = await this.prisma.size.findMany({
      where,
      orderBy: { [sortBy]: sortOrder },
      take,
      skip,
    });

    // Umumiy sonni olish
    const total = await this.prisma.size.count({ where });

    return { data, total };
  }

  async findOne(id: string) {
    try {
      const size = await this.prisma.size.findUnique({
        include: { Tool: { include: { Brand: true, Capacity: true } } },
        where: { id },
      });
      if (!size) {
        throw new NotFoundException(`Hajm #${id} topilmadi`);
      }
      return { data: size }; // Hajmni qaytarish
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Agar hajm topilmasa, 404 xatosi qaytariladi
      }
      throw new NotFoundException(`Hajm #${id} topilmadi`);
    }
  }

  // Hajmni yangilash
  async update(id: string, updateSizeDto: UpdateSizeDto) {
    try {
      const size = await this.prisma.size.update({
        where: { id },
        data: {
          name_uz: updateSizeDto.name_uz,
          name_ru: updateSizeDto.name_ru,
          name_en: updateSizeDto.name_en,
        },
      });
      return { data: size }; // Yangilangan hajmni qaytarish
    } catch (error) {
      throw new NotFoundException(`Hajm #${id} topilmadi`);
    }
  }

  // Hajmni o'chirish
  async remove(id: string) {
    try {
      await this.prisma.size.delete({
        where: { id },
      });
      return `Hajm #${id} muvaffaqiyatli o'chirildi`; // Hajm o'chirilgandan keyin xabar qaytarish
    } catch (error) {
      throw new NotFoundException(`Hajm #${id} topilmadi`);
    }
  }
}
