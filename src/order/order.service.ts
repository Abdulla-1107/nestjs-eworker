import { Injectable } from '@nestjs/common';
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
              phone: true
            },
          },
        },
      }),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
