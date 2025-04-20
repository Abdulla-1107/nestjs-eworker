import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartnerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPartnerDto: CreatePartnerDto) {
    try {
      const partner = await this.prisma.partners.create({
        data: createPartnerDto,
      });
      return { data: partner };
    } catch (error) {
      throw new InternalServerErrorException(`Error: ${error.message}`);
    }
  }

  async findAll() {
    return { data: await this.prisma.partners.findMany() };
  }

  async update(id: string, updatePartnerDto: UpdatePartnerDto) {
    try {
      const existingPartner = await this.prisma.partners.findUnique({
        where: { id },
      });

      if (!existingPartner) {
        throw new NotFoundException(`Hamkor topilmadi, ID: ${id}`);
      }

      const updatedPartner = await this.prisma.partners.update({
        where: { id },
        data: updatePartnerDto,
      });

      return { data: updatedPartner };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Error: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const existingPartner = await this.prisma.partners.findUnique({
        where: { id },
      });

      if (!existingPartner) {
        throw new NotFoundException(`Hamkor topilmadi, ID: ${id}`);
      }

      const delted = await this.prisma.partners.delete({
        where: { id },
      });

      return { data: delted };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(`Error: ${error.message}`);
    }
  }
}
