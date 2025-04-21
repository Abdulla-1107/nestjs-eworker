import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Prisma } from 'generated/prisma';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const brand = await this.prisma.brand.create({
        data: createBrandDto,
      });
      return { data: brand };
    } catch (error) {
      throw new InternalServerErrorException(
        'Brend yaratishda xatolik yuz berdi',
      );
    }
  }
  async findAll(query: {
    page: number;
    limit: number;
    search?: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
  }) {
    const { page, limit, search, sortBy, sortOrder } = query;

    const skip = (page - 1) * limit;
    const allowedSortFields = ['createdAt', 'name_uz', 'name_ru', 'name_en'];
    if (!allowedSortFields.includes(sortBy)) {
      throw new NotFoundException(`Saralash maydoni topilmadi: ${sortBy}`);
    }
    // if (search && !allowedSortFields.includes(search)) {
    //   throw new NotFoundException(`Qidiruv maydoni topilmadi: ${search}`);
    // }
    const where: Prisma.BrandWhereInput = search
      ? {
          OR: [
            { name_uz: { contains: search, mode: 'insensitive' } },
            { name_ru: { contains: search, mode: 'insensitive' } },
            { name_en: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [data, total] = await this.prisma.$transaction([
      this.prisma.brand.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),
      this.prisma.brand.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    try {
      const brand = await this.prisma.brand.findUnique({
        include: {
          Tool: { include: { Brand: true, Capacity: true, Size: true } },
        },
        where: { id },
      });
      if (!brand) {
        throw new NotFoundException(`Brend topilmadi`);
      }
      return { data: brand };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new NotFoundException('Brend topilmadi');
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    try {
      const exist = await this.prisma.brand.findUnique({ where: { id } });
      if (!exist) {
        throw new NotFoundException(`Yangilash uchun brend topilmadi: ${id}`);
      }

      return await this.prisma.brand.update({
        where: { id },
        data: updateBrandDto,
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new NotFoundException('Brend topilmadi');
    }
  }

  async remove(id: string) {
    try {
      const exist = await this.prisma.brand.findUnique({ where: { id } });
      if (!exist) {
        throw new NotFoundException(`Oʻchirish uchun brend topilmadi: ${id}`);
      }

      return await this.prisma.brand.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new NotFoundException('Brend topilmadi');
    }
  }
}
