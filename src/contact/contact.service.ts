import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      const contact = await this.prisma.contact.create({
        data: createContactDto,
      });
      return { data: contact };
    } catch (error) {
      throw new InternalServerErrorException(`Xatolik: ${error.message}`);
    }
  }
  async findAll(query: {
    limit?: number;
    page?: number;
    order?: 'asc' | 'desc';
    sortBy?: string;
    search?: string;
  }) {
    const {
      limit = 10,
      page = 1,
      order = 'asc',
      sortBy = 'createdAt', // Default sortBy maydoni 'createdAt' bo'lsin
      search = '',
    } = query;

    // Mavjud maydonlarni tekshirish
    const validSortFields = ['createdAt', 'name', 'surName', 'phone']; // Yoki boshqa maydonlar
    if (!validSortFields.includes(sortBy)) {
      throw new Error(`Invalid sortBy field: ${sortBy}`);
    }

    const skip = (page - 1) * limit;

    const contacts = await this.prisma.contact.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { surName: { contains: search, mode: 'insensitive' } },
          { phone: { contains: search, mode: 'insensitive' } },
        ],
      },
      orderBy: {
        [sortBy]: order,
      },
      skip,
      take: limit,
    });

    const total = await this.prisma.contact.count({
      where: {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { surName: { contains: search, mode: 'insensitive' } },
          { phone: { contains: search, mode: 'insensitive' } },
        ],
      },
    });

    return {
      data: contacts,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string) {
    try {
      const contact = await this.prisma.contact.findUnique({
        where: { id },
      });

      if (!contact) {
        throw new NotFoundException(`Contact ID ${id} topilmadi`);
      }

      return { data: contact };
    } catch (error) {
      throw new NotFoundException(`Xatolik: ${error.message}`);
    }
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    try {
      const existing = await this.prisma.contact.findUnique({ where: { id } });
      if (!existing) {
        throw new NotFoundException(`Contact ID ${id} topilmadi`);
      }

      const updated = await this.prisma.contact.update({
        where: { id },
        data: updateContactDto,
      });

      return { data: updated };
    } catch (error) {
      throw new InternalServerErrorException(`Xatolik: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const existing = await this.prisma.contact.findUnique({ where: { id } });
      if (!existing) {
        throw new NotFoundException(`Contact ID ${id} topilmadi`);
      }

      const deleted = await this.prisma.contact.delete({
        where: { id },
      });

      return { data: deleted };
    } catch (error) {
      throw new InternalServerErrorException(`Xatolik: ${error.message}`);
    }
  }
}
