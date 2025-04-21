import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BasketService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBasketDto: CreateBasketDto, userId: string) {
    const basket = await this.prisma.basket.create({
      data: { ...createBasketDto, userId },
    });
    return { data: basket };
  }

  async findAll() {
    return { data: await this.prisma.basket.findMany() };
  }

  async findOne(id: string) {
    const basket = await this.prisma.basket.findFirst({ where: { id } });
    if (!basket) {
      throw new NotFoundException('Basket topilmadi');
    }
    return { data: basket };
  }

  async update(id: string, updateBasketDto: UpdateBasketDto) {
    const basket = await this.prisma.basket.findFirst({ where: { id } });
    if (!basket) {
      throw new NotFoundException('Basket topilmadi');
    }
    const updated = await this.prisma.basket.update({
      where: { id },
      data: updateBasketDto,
    });
    return { data: updated };
  }

  async remove(id: string) {
    const basket = await this.prisma.basket.findFirst({ where: { id } });
    if (!basket) {
      throw new NotFoundException('Basket topilmadi');
    }
    let deleted = await this.prisma.basket.delete({ where: { id } });
    return { data: deleted };
  }
}
