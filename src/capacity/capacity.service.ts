import { Injectable } from '@nestjs/common';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Prisma service import qilindi

@Injectable()
export class CapacityService {
  constructor(private readonly prisma: PrismaService) {} // Prisma servisini inject qilish

  // Yangi quvvatni yaratish
  async create(createCapacityDto: CreateCapacityDto) {
    try {
      return await this.prisma.capacity.create({
        data: createCapacityDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Quvvatni yaratishda xatolik yuz berdi',
      );
    }
  }

  async findAll(query: {
    page: number;
    limit: number;
    search?: string;
    searchField: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
  }) {
    const { page, limit, search, searchField, sortBy, sortOrder } = query;
  
    const skip = (page - 1) * limit;
  
    const allowedFields = ['createdAt', 'name_uz', 'name_ru', 'name_en'];
  
    if (!allowedFields.includes(sortBy)) {
      throw new NotFoundException(`Saralash maydoni topilmadi: ${sortBy}`);
    }
  
    if (search && !allowedFields.includes(searchField)) {
      throw new NotFoundException(`Qidiruv maydoni topilmadi: ${searchField}`);
    }
  
    const where = search
      ? {
          [searchField]: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};
  
    try {
      const [data, total] = await this.prisma.$transaction([
        this.prisma.capacity.findMany({
          where,
          skip,
          take: limit,
          orderBy: {
            [sortBy]: sortOrder,
          },
        }),
        this.prisma.capacity.count({ where }),
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
      throw new InternalServerErrorException('Quvvatlar ro‘yxatini olishda xatolik yuz berdi');
    }
  }
  

  async findOne(id: string) {
    try {
      const capacity = await this.prisma.capacity.findFirst({
        where: { id },
      });
      if (!capacity) {
        throw new NotFoundException('Quvvat topilmadi');
      }
      return capacity;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateCapacityDto: UpdateCapacityDto) {
    try {
      const existingCapacity = await this.prisma.capacity.findUnique({
        where: { id },
      });
      if (!existingCapacity) {
        throw new NotFoundException('Quvvat topilmadi');
      }

      return await this.prisma.capacity.update({
        where: { id },
        data: updateCapacityDto,
      });
    } catch (error) {
      throw new NotFoundException('Quvvat topilmadi');
    }
  }

  async remove(id: string) {
    try {
      const existingCapacity = await this.prisma.capacity.findUnique({
        where: { id },
      });
      if (!existingCapacity) {
        throw new NotFoundException('Quvvat topilmadi');
      }

      await this.prisma.capacity.delete({
        where: { id },
      });
      return { message: 'Quvvat muvaffaqiyatli o‘chirildi' };
    } catch (error) {
      throw new NotFoundException('Quvvat topilmadi');
    }
  }
}
