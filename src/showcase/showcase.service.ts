import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} showcase`;
  }

  update(id: number, updateShowcaseDto: UpdateShowcaseDto) {
    return `This action updates a #${id} showcase`;
  }

  remove(id: number) {
    return `This action removes a #${id} showcase`;
  }
}
