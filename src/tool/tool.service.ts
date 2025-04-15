import {
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
        data: { ...createToolDto, code: randomNumber, isActive: false },
      });
      return { data: newTool };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Xato ');
    }
  }

  async findAll() {
    return {
      data: await this.prisma.tool.findMany({
        include: {
          Brand: true,
          Size: true,
          Capacity: true,
        },
      }),
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

    return { data: deleteTool  };
  }
}
