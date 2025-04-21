import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFaqDto: CreateFaqDto) {
    const faq = await this.prisma.faq.create({
      data: createFaqDto,
    });

    return { message: 'FAQ yaratildi', data: faq };
  }

  async findAll() {
    const faqs = await this.prisma.faq.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return { count: faqs.length, data: faqs };
  }

  async update(id: string, updateFaqDto: UpdateFaqDto) {
    const exists = await this.prisma.faq.findUnique({ where: { id } });

    if (!exists) {
      throw new NotFoundException('FAQ topilmadi');
    }

    const updated = await this.prisma.faq.update({
      where: { id },
      data: updateFaqDto,
    });

    return { data: updated };
  }

  async remove(id: string) {
    const exists = await this.prisma.faq.findUnique({ where: { id } });

    if (!exists) {
      throw new NotFoundException('FAQ topilmadi');
    }

    await this.prisma.faq.delete({ where: { id } });

    return { message: 'FAQ o‘chirildi' };
  }
}
