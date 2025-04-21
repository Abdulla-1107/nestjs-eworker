import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    const regionname = await this.prisma.region.findFirst({where: {name_en: createRegionDto.name_en}})
    if(regionname){
      throw new BadRequestException("Region mavjud")
    }
    try {
      let region = await this.prisma.region.create({ data: createRegionDto });
      return { data: region };
    } catch (error) {
      return { message: error.message };
    }
  }

  async findAll(query: any) {
    const {
      search,
      sortBy = 'createdAt',
      order = 'desc',
      page = 1,
      limit = 10,
    } = query;

    const allowedSortFields = [
      'name_uz',
      'name_ru',
      'name_en',
      'createdAt',
      'updatedAt',
    ];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : 'createdAt';
    const sortOrder = ['asc', 'desc'].includes(order) ? order : 'desc';

    const pageNumber = Math.max(Number(page) || 1, 1);
    const pageSize = Math.max(Number(limit) || 10, 1);
    const skip = (pageNumber - 1) * pageSize;

    const where: Prisma.RegionWhereInput = search
      ? {
          OR: [
            { name_uz: { contains: search, mode: 'insensitive' } },
            { name_ru: { contains: search, mode: 'insensitive' } },
            { name_en: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    try {
      const [regions, total] = await Promise.all([
        this.prisma.region.findMany({
          where,
          skip,
          take: pageSize,
          orderBy: { [sortField]: sortOrder },
        }),
        this.prisma.region.count({ where }),
      ]);

      return {
        data: regions,
        meta: {
          total,
          page: pageNumber,
          lastPage: Math.ceil(total / pageSize),
        },
      };
    } catch (error) {
      throw new Error(`message: ${error.message}`);
    }
  }

  async findOne(id: string) {
    const region = await this.prisma.region.findFirst({
      where: { id },
    });
    if (!region) {
      throw new NotFoundException('Region Topilmadi');
    }
    return { data: region };
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    const region = await this.prisma.region.findFirst({ where: { id } });
    if (!region) {
      throw new NotFoundException('Region Topilmadi');
    }
    try {
      const updateRegion = await this.prisma.region.update({
        where: { id },
        data: updateRegionDto,
      });
      return { data: updateRegion };
    } catch (error) {
      return { message: error.message };
    }
  }

  async remove(id: string) {
    const region = await this.prisma.region.findFirst({ where: { id } });
    if (!region) {
      throw new NotFoundException('Region Topilmadi');
    }
    const deleteRegion = await this.prisma.region.delete({ where: { id } });
    return { data: deleteRegion };
  }
}
