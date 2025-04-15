import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) {}

  @Post("/create")
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

  @Get("/all")
  @ApiOperation({ summary: 'Barcha quvvatlarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Barcha quvvatlar muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({
    status: 500,
    description: 'Server xatosi yuz berdi',
  })
  findAll() {
    return this.capacityService.findAll();
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
