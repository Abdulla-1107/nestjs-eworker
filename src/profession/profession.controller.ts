import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Profession')
@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi kasb yaratish' })
  @ApiResponse({ status: 201, description: 'Kasb muvaffaqiyatli yaratildi' })
  @ApiResponse({ status: 400, description: 'Xatolik yuz berdi' })
  create(@Body() createProfessionDto: CreateProfessionDto) {
    return this.professionService.create(createProfessionDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Barcha kasblarni olish' })
  @ApiResponse({ status: 200, description: 'Kasblar ro‘yxati' })
  findAll() {
    return this.professionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID orqali kasb olish' })
  @ApiResponse({ status: 200, description: 'Topilgan kasb' })
  @ApiResponse({ status: 404, description: 'Kasb topilmadi' })
  findOne(@Param('id') id: string) {
    return this.professionService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Kasbni yangilash' })
  @ApiResponse({ status: 200, description: 'Kasb muvaffaqiyatli yangilandi' })
  @ApiResponse({ status: 404, description: 'Yangilash uchun kasb topilmadi' })
  update(
    @Param('id') id: string,
    @Body() updateProfessionDto: UpdateProfessionDto,
  ) {
    return this.professionService.update(id, updateProfessionDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Kasbni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Kasb muvaffaqiyatli o‘chirildi' })
  @ApiResponse({ status: 404, description: 'O‘chirish uchun kasb topilmadi' })
  remove(@Param('id') id: string) {
    return this.professionService.remove(id);
  }
}
