import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCommentDto: CreateCommentDto, userId: string) {
    const { message, orderId, masterRatings } = createCommentDto;

    // 1. Order mavjudligini tekshirish
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) {
      throw new NotFoundException('Order topilmadi');
    }

    // 2. Masterlar mavjudligini tekshirish + star validatsiyasi
    for (const rating of masterRatings) {
      const masterExists = await this.prisma.master.findUnique({
        where: { id: rating.masterId },
      });
      if (!masterExists) {
        throw new NotFoundException(`Master topilmadi: ${rating.masterId}`);
      }
      if (rating.star < 0 || rating.star > 5) {
        throw new BadRequestException(
          `Yulduz qiymati 0 dan 5 gacha bo'lishi kerak: ${rating.star}`,
        );
      }
    }

    // 3. Comment yaratish (foydalanuvchini ham qo‘shamiz)
    const comment = await this.prisma.comment.create({
      data: {
        message,
        orderId,
        userId, // token orqali olingan foydalanuvchi ID
        ratings: {
          create: masterRatings.map((rating) => ({
            masterId: rating.masterId,
            star: rating.star,
          })),
        },
      },
      include: {
        ratings: true,
      },
    });

    return comment;
  }

  async findAll() {
    const comments = await this.prisma.comment.findMany({
      include: {
        ratings: true, // Agar siz yulduzlar va boshqa ma'lumotlarni qo'shmoqchi bo'lsangiz
      },
    });

    if (!comments || comments.length == 0) {
      throw new NotFoundException('Hech qanday sharh topilmadi');
    }

    return comments;
  }

  async remove(id: string) {
    // Commentni topish
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException('Comment topilmadi');
    }

    // Agar comment mavjud bo'lsa, o‘chirib yuborish
    await this.prisma.comment.delete({
      where: { id },
    });

    return { message: "Comment o'chirildi" };
  }
}
