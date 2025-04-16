import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

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

  async findAll() {
    return await this.prisma.master.findMany();
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
