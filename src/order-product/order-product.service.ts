import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderProductService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOrderProductDto: CreateOrderProductDto) {
    const order = await this.prisma.order.findFirst({
      where: { id: createOrderProductDto.orderId },
    });
    if (!order) {
      throw new NotFoundException('Order topilmadi');
    }
    const profession = await this.prisma.profession.findFirst({
      where: { id: createOrderProductDto.professionId },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    const tool = await this.prisma.tool.findFirst({
      where: { id: createOrderProductDto.toolId },
    });
    if (!tool) {
      throw new NotFoundException('Tool topilmadi');
    }
    const level = await this.prisma.level.findFirst({
      where: { id: createOrderProductDto.levelId },
    });
    if (!level) {
      throw new NotFoundException('Level topilmadi');
    }
    try {
      const newData = await this.prisma.orderProduct.create({
        data: createOrderProductDto,
      });
      return { data: newData };
    } catch (error) {
      throw new InternalServerErrorException(`Error ${error.message}`);
    }
  }

  async findAll() {
    return {
      data: await this.prisma.orderProduct.findMany({
        include: { Tool: true, Profession: true, Level: true, Order: true },
      }),
    };
  }

  async findOne(id: string) {
    const data = await this.prisma.orderProduct.findFirst({
      where: { id },
      include: { Profession: true, Level: true, Order: true, Tool: true },
    });
    if (!data) {
      throw new NotFoundException('Data topilmadi');
    }
    return { data };
  }

  async update(id: string, updateOrderProductDto: UpdateOrderProductDto) {
    return `This action updates a #${id} orderProduct`;
  }

  async remove(id: string) {
    const data = await this.prisma.orderProduct.findFirst({ where: { id } });
    if (!data) {
      throw new NotFoundException('Data topilmadi');
    }
    const deleted = await this.prisma.orderProduct.delete({ where: { id } });
    return { data: deleted };
  }
}
