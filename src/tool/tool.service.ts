import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToolService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createToolDto: CreateToolDto) {
    const brand = await this.prisma.brand.findFirst({
      where: { id: createToolDto.brandId },
    });
    if (!brand) {
      throw new NotFoundException('Brand topilmadi');
    }
    const capacity = await this.prisma.capacity.findFirst({
      where: { id: createToolDto.capacityId },
    });
    if (!capacity) {
      throw new NotFoundException('Capacity topilmadi');
    }
    const size = await this.prisma.size.findFirst({
      where: { id: createToolDto.sizeId },
    });
    if (!size) {
      throw new NotFoundException('Size topilmadi');
    }
    const randomNumber = Number(
      Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(''),
    );
    console.log(randomNumber);
    try {
      const newTool = await this.prisma.tool.create({
        data: { ...createToolDto, code: randomNumber, isActive: true },
      });
      return { data: newTool };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Xato ');
    }
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    brandId?: string;
    capacityId?: string;
    sizeId?: string;
  }) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      brandId,
      capacityId,
      sizeId,
    } = query;

    const where: any = {};

    if (search) {
      where.OR = [
        { name_uz: { contains: search, mode: 'insensitive' } },
        { name_ru: { contains: search, mode: 'insensitive' } },
        { name_en: { contains: search, mode: 'insensitive' } },
        { desc_uz: { contains: search, mode: 'insensitive' } },
        { desc_ru: { contains: search, mode: 'insensitive' } },
        { desc_en: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (brandId) where.brandId = brandId;
    if (capacityId) where.capacityId = capacityId;
    if (sizeId) where.sizeId = sizeId;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.tool.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        include: {
          Brand: true,
          Size: true,
          Capacity: true,
        },
      }),
      this.prisma.tool.count({ where }),
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
    const tool = await this.prisma.tool.findFirst({
      where: { id },
      include: {
        Brand: true,
        Capacity: true,
        Size: true,
      },
    });
    if (!tool) {
      throw new NotFoundException('Tool topilmadi');
    }
    return { data: tool };
  }

  async update(id: string, updateToolDto: UpdateToolDto) {
    const tool = await this.prisma.tool.findFirst({ where: { id } });
    if (!tool) {
      throw new NotFoundException('Tool topilmadi');
    }
    const brand = await this.prisma.brand.findFirst({
      where: { id: updateToolDto.brandId },
    });
    if (!brand) {
      throw new NotFoundException('Brand topilmadi');
    }
    const capacity = await this.prisma.capacity.findFirst({
      where: { id: updateToolDto.capacityId },
    });
    if (!capacity) {
      throw new NotFoundException('Capacity topilmadi');
    }
    const size = await this.prisma.size.findFirst({
      where: { id: updateToolDto.sizeId },
    });
    if (!size) {
      throw new NotFoundException('Size topilmadi');
    }
    const updateTool = await this.prisma.tool.update({
      where: { id },
      data: updateToolDto,
    });
    return { data: updateTool };
  }

  async remove(id: string) {
    const tool = await this.prisma.tool.findFirst({ where: { id } });
    if (!tool) {
      throw new NotFoundException('Tool topilmadi');
    }

    let deleteTool = await this.prisma.tool.delete({ where: { id } });

    return { data: deleteTool };
  }
}
