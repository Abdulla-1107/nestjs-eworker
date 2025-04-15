import { Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Prisma servisini import qilish

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

  // Barcha hajmlarni olish
  async findAll() {
    try {
      const sizes = await this.prisma.size.findMany();
      return { data: sizes }; // Barcha hajmlarni qaytarish
    } catch (error) {
      throw new InternalServerErrorException(
        'Hajmlarni olishda xatolik yuz berdi',
      );
    }
  }

  // Bitta hajmni olish
  async findOne(id: string) {
    try {
      const size = await this.prisma.size.findUnique({
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
