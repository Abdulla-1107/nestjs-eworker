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

  async findAll() {
    try {
      return await this.prisma.capacity.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Quvvatlar ro‘yxatini olishda xatolik yuz berdi',
      );
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
