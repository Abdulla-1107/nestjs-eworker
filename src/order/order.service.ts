import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderStatus } from 'src/Enums/order.enum';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto, userId: string) {
    const order = await this.prisma.order.create({
      data: {
        ...createOrderDto,
        userId: userId,
        status: OrderStatus.PENDING,
      },
    });
    return { data: order };
  }

  async findAll() {
    return {
      data: await this.prisma.order.findMany({
        include: {
          User: {
            select: {
              fullName: true,
              phone: true,
            },
          },
        },
      }),
    };
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findFirst({
      where: { id },
      include: {
        User: { select: { fullName: true, phone: true } },
      },
    });
    if (!order) {
      throw new NotFoundException('Order topilmadi');
    }
    return { data: order };
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: string) {
    const order = await this.prisma.order.findFirst({ where: { id } });
    if (!order) {
      throw new NotFoundException('Order topilmadi');
    }
    const deleteOrder = await this.prisma.order.delete({ where: { id } });

    return { data: deleteOrder };
  }
}
