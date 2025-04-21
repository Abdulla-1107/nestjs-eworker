import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderStatus } from 'src/Enums/order.enum';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto, userId: string) {
    const orderProductData = await Promise.all(
      createOrderDto.orderProducts.map(async (product) => {
        // Check if Profession exists and filter out null
        if (product.professionId) {
          const profession = await this.prisma.profession.findUnique({
            where: { id: product.professionId },
          });
          if (!profession) {
            throw new NotFoundException(
              `Profession topilmadi id ${product.professionId} `,
            );
          }
        }

        // Check if Level exists and filter out null
        if (product.levelId) {
          const level = await this.prisma.level.findUnique({
            where: { id: product.levelId },
          });
          if (!level) {
            throw new NotFoundException(
              `Level topilmadi id ${product.levelId} `,
            );
          }
        }

        // Check if Tool exists and filter out null
        if (product.toolId) {
          const tool = await this.prisma.tool.findUnique({
            where: { id: product.toolId },
          });
          if (!tool) {
            throw new NotFoundException(`Tool topilmadi id ${product.toolId} `);
          }
          if (tool.quantity < product.count) {
            throw new BadRequestException('Tool yetarli emas');
          }
          else if (tool.quantity > product.count){
            tool.quantity = tool.quantity - product.count
          }

        }

        // Return only non-null values
        return {
          price: product.price,
          timeUnit: product.timeUnit || undefined, // null will be replaced with undefined
          workingTime: product.workingTime || undefined, // null will be replaced with undefined
          count: product.count,

          ...(product.professionId && {
            Profession: {
              connect: { id: product.professionId },
            },
          }),

          ...(product.levelId && {
            Level: {
              connect: { id: product.levelId },
            },
          }),

          ...(product.toolId && {
            Tool: {
              connect: { id: product.toolId },
            },
          }),
        };
      }),
    );

    // Proceed to create the order
    const order = await this.prisma.order.create({
      data: {
        address: createOrderDto.address,
        latitude: createOrderDto.latitude,
        longitude: createOrderDto.longitude,
        date: createOrderDto.date,
        totalPrice: createOrderDto.totalPrice,
        paymentType: createOrderDto.paymentType,
        withDelivery: createOrderDto.withDelivery,
        deliveryComment: createOrderDto.deliveryComment,
        userId: userId,
        status: OrderStatus.PENDING,

        orderProduct: {
          create: orderProductData,
        },
      },
      include: {
        orderProduct: true,
      },
    });

    // Filter out null values in the response
    const filteredOrder = {
      ...order,
      orderProduct: order.orderProduct.map((product) => {
        return Object.fromEntries(
          Object.entries(product).filter(([_, v]) => v != null),
        );
      }),
    };

    return { data: filteredOrder };
  }

  async findAll(query: {
    page: number;
    limit: number;
    withDelivery?: string;
    paid?: string;
    paymentType?: string;
    status?: string;
    sortBy: string;
    orderBy: 'asc' | 'desc';
  }) {
    const {
      page,
      limit,
      withDelivery,
      paid,
      paymentType,
      status,
      sortBy,
      orderBy,
    } = query;

    const skip = (page - 1) * limit;

    const where: any = {};

    if (withDelivery != undefined) {
      where.withDelivery = withDelivery == 'true';
    }

    if (paid !== undefined) {
      where.paid = paid === 'true';
    }

    if (paymentType) {
      where.paymentType = paymentType;
    }

    if (status) {
      where.status = status;
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.order.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: orderBy,
        },
        include: {
          User: {
            select: {
              fullName: true,
              phone: true,
              Region: true,
            },
          },
          orderProduct: true,
          OrderMaster: true,
        },
      }),
      this.prisma.order.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findFirst({
      where: { id },
      include: {
        User: { select: { fullName: true, phone: true, Region: true } },
        orderProduct: true,
        OrderMaster: true,
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
