import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateGeneralInfoDto } from './dto/create-general-info.dto';
import { UpdateGeneralInfoDto } from './dto/update-general-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneralInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGeneralInfoDto: CreateGeneralInfoDto) {
    const count = await this.prisma.generalInfo.count();
    if (count > 0) {
      throw new ConflictException("Umumiy ma'lumot allaqachon mavjud");
    }

    const data = await this.prisma.generalInfo.create({
      data: createGeneralInfoDto,
    });
    return { data };
  }

  async findGeneralInfo() {
    return { data: await this.prisma.generalInfo.findMany() };
  }

  async update(id: string, updateGeneralInfoDto: UpdateGeneralInfoDto) {
    const match = await this.prisma.generalInfo.findFirst({ where: { id } });
    if (!match) {
      throw new NotFoundException("Ma'lumotlar topilmadi");
    }
    const generalInfo = await this.prisma.generalInfo.update({
      where: { id },
      data: updateGeneralInfoDto,
    });
    return { data: generalInfo };
  }

  async remove(id: string) {
    const match = await this.prisma.generalInfo.findFirst({ where: { id } });
    if (!match) {
      throw new NotFoundException("Ma'lumotlar topilmadi");
    }
    const generalInfo = await this.prisma.generalInfo.delete({
      where: { id },
    });
    return { message: `GeneralInfo #${id} o'chirildi`, data: generalInfo };
  }
}
