import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi quvvat yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Yangi quvvat muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 500,
    description: 'Server xatosi yuz berdi',
  })
  create(@Body() createCapacityDto: CreateCapacityDto) {
    return this.capacityService.create(createCapacityDto);
  }

  @Get('/all')
  @ApiOperation({
    summary: 'Barcha quvvatlarni olish (paginate, search, sort)',
  })
  @ApiResponse({
    status: 200,
    description: 'Barcha quvvatlar muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({ status: 500, description: 'Server xatosi yuz berdi' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'searchField', required: false })
  @ApiQuery({ name: 'sortBy', required: false })
  @ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'] })
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('searchField') searchField: string = 'name_uz',
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    return this.capacityService.findAll({
      page: Number(page),
      limit: Number(limit),
      search,
      searchField,
      sortBy,
      sortOrder,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Maxsus quvvatni olish' })
  @ApiParam({ name: 'id', description: 'Quvvatning IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Quvvat muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Quvvat topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Server xatosi yuz berdi',
  })
  findOne(@Param('id') id: string) {
    return this.capacityService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Quvvatni yangilash' })
  @ApiParam({ name: 'id', description: 'Quvvatning IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Quvvat muvaffaqiyatli yangilandi',
  })
  @ApiResponse({
    status: 404,
    description: 'Quvvat topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Server xatosi yuz berdi',
  })
  update(
    @Param('id') id: string,
    @Body() updateCapacityDto: UpdateCapacityDto,
  ) {
    return this.capacityService.update(id, updateCapacityDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Quvvatni o‘chirish' })
  @ApiParam({ name: 'id', description: 'Quvvatning IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Quvvat muvaffaqiyatli o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Quvvat topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Server xatosi yuz berdi',
  })
  remove(@Param('id') id: string) {
    return this.capacityService.remove(id);
  }
}
