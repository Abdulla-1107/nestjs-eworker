import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { MasterQueryDto } from './dto/master-query.dto';

@Injectable()
export class MasterService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMasterDto: CreateMasterDto) {
    const master = await this.prisma.master.findFirst({
      where: { phone: createMasterDto.phone },
    });
    if (master) {
      throw new ConflictException('Telefon raqamga tegishli master bor');
    }
    const newMaster = await this.prisma.master.create({
      data: { ...createMasterDto, isActive: true },
    });
    return { data: newMaster };
  }

  async findAll(query: MasterQueryDto) {
    const {
      search,
      isActive,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 10,
    } = query;

    const skip = (page - 1) * limit;

    const where: any = {};

    // Filter
    if (typeof isActive == 'boolean') {
      where.isActive = isActive;
    }

    // Search (firstName, lastName, phone, about)
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { about: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.master.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      this.prisma.master.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string) {
    const master = await this.prisma.master.findFirst({ where: { id } });
    if (!master) {
      throw new NotFoundException('Master topilmadi');
    }

    return { data: master };
  }

  async update(id: string, updateMasterDto: UpdateMasterDto) {
    const master = await this.prisma.master.findFirst({ where: { id } });
    if (!master) {
      throw new NotFoundException('Master topilmadi');
    }
    const updateMaster = await this.prisma.master.update({
      where: { id },
      data: updateMasterDto,
    });
    return { data: updateMaster };
  }

  async remove(id: string) {
    const master = await this.prisma.master.findFirst({ where: { id } });
    if (!master) {
      throw new NotFoundException('Master topilmadi');
    }
    const deleteMaster = await this.prisma.master.delete({ where: { id } });
    return { data: deleteMaster };
  }
}
