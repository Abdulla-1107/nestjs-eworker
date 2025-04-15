import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

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

  async findAll() {
    try {
      return await this.prisma.brand.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Brendlar roʻyxatini olishda xatolik yuz berdi',
      );
    }
  }

  async findOne(id: string) {
    try {
      const brand = await this.prisma.brand.findUnique({
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
