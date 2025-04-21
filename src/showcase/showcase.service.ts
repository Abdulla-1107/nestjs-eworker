import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowcaseService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createShowcaseDto: CreateShowcaseDto) {
    try {
      const data = await this.prisma.showcase.create({
        data: createShowcaseDto,
      });
      return { data };
    } catch (error) {
      throw new InternalServerErrorException(`Error ${error.message}`);
    }
  }

  async findAll() {
    return { data: await this.prisma.showcase.findMany() };
  }

  async update(id: string, updateShowcaseDto: UpdateShowcaseDto) {
    const data = await this.prisma.showcase.findFirst({ where: { id } });
    if (!data) {
      throw new NotFoundException('Showcase topilmadi');
    }
    const updated = await this.prisma.showcase.update({
      where: { id },
      data: updateShowcaseDto,
    });
    return { data: updated };
  }

  async remove(id: string) {
    const data = await this.prisma.showcase.findFirst({ where: { id } });
    if (!data) {
      throw new NotFoundException('Showcase topilmadi');
    }
    const deleted = await this.prisma.showcase.delete({ where: { id } });
    return { data: deleted };
  }
}
