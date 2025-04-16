import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProfessionDto: CreateProfessionDto) {
    try {
      const profession = await this.prisma.profession.create({
        data: { ...createProfessionDto, isActive: true },
      });
      return { data: profession };
    } catch (error) {
      throw new InternalServerErrorException(`Erorr ${error.message}`);
    }
  }

  async findAll() {
    return { data: await this.prisma.profession.findMany() };
  }

  async findOne(id: string) {
    const profession = await this.prisma.profession.findFirst({
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    return { data: profession };
  }

  async update(id: string, updateProfessionDto: UpdateProfessionDto) {
    const profession = await this.prisma.profession.findFirst({
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }
    const Newprofession = await this.prisma.profession.update({
      where: { id },
      data: updateProfessionDto,
    });

    return { data: Newprofession };
  }

  async remove(id: string) {
    const profession = await this.prisma.profession.findFirst({
      where: { id },
    });
    if (!profession) {
      throw new NotFoundException('Profession topilmadi');
    }

    const Newprofession = await this.prisma.profession.delete({
      where: { id },
    });

    return { data: Newprofession };
  }
}
