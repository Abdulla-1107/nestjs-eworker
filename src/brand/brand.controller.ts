import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('Brendlar') // Swagger hujjatlarida bu controllerni "Brendlar" deb nomlaymiz
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Brend yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Brend muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 400,
    description: 'Yaratishda xatolik',
  })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Barcha brendlarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Barcha brendlar muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({
    status: 500,
    description: 'Brendlarni olishda xatolik',
  })
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Brendni id bo‘yicha olish' })
  @ApiParam({ name: 'id', description: 'Brendning IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Brend muvaffaqiyatli topildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Brend topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Brendni olishda xatolik',
  })
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Brendni yangilash' })
  @ApiParam({ name: 'id', description: 'Yangilash uchun brendning IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Brend muvaffaqiyatli yangilandi',
  })
  @ApiResponse({
    status: 404,
    description: 'Brend topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Brendni yangilashda xatolik',
  })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Brendni o‘chirish' })
  @ApiParam({ name: 'id', description: 'O‘chirish uchun brendning IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Brend muvaffaqiyatli o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Brend topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Brendni o‘chirishda xatolik',
  })
  remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
