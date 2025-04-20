import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@ApiTags('Partners') // Swaggerda "Partners" bo'limini yaratish
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi hamkor yaratish' })  // Swaggerda operatsiyaning qisqacha tavsifi
  @ApiResponse({ status: 201, description: 'Hamkor muvaffaqiyatli yaratildi' })  // Yangi hamkor yaratish muvaffaqiyatli bo\'lsa
  @ApiResponse({ status: 409, description: 'Hamkor allaqachon mavjud' })  // Agar hamkor mavjud bo\'lsa
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnerService.create(createPartnerDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Barcha hamkorlarni olish' })  // Swaggerda barcha hamkorlarni olish operatsiyasi
  @ApiResponse({ status: 200, description: 'Barcha hamkorlar muvaffaqiyatli qaytarildi' })  // Barcha hamkorlar muvaffaqiyatli qaytarildi
  findAll() {
    return this.partnerService.findAll();
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Hamkorni yangilash' })  // Swaggerda hamkorni yangilash operatsiyasi
  @ApiParam({ name: 'id', description: 'Hamkor IDsi' })  // ID parametri haqida ma\'lumot
  @ApiResponse({ status: 200, description: 'Hamkor muvaffaqiyatli yangilandi' })  // Hamkor muvaffaqiyatli yangilandi
  @ApiResponse({ status: 404, description: 'Hamkor topilmadi' })  // Agar hamkor topilmasa
  update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
    return this.partnerService.update(id, updatePartnerDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Hamkorni o\'chirish' })  // Swaggerda hamkorni o\'chirish operatsiyasi
  @ApiParam({ name: 'id', description: 'Hamkor IDsi' })  // ID parametri haqida ma\'lumot
  @ApiResponse({ status: 200, description: 'Hamkor muvaffaqiyatli o\'chirildi' })  // Hamkor muvaffaqiyatli o\'chirildi
  @ApiResponse({ status: 404, description: 'Hamkor topilmadi' })  // Agar hamkor topilmasa
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }
}
