import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfessionLevelService } from './profession-level.service';
import { CreateProfessionLevelDto } from './dto/create-profession-level.dto';
import { UpdateProfessionLevelDto } from './dto/update-profession-level.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Profession-Level')
@Controller('profession-level')
export class ProfessionLevelController {
  constructor(
    private readonly professionLevelService: ProfessionLevelService,
  ) {}

  @Post("/create")
  @ApiOperation({ summary: 'Yangi kasb-daraja bogʻlanishini yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Kasb-daraja bogʻlanishi muvaffaqiyatli yaratildi',
  })
  @ApiResponse({ status: 400, description: 'Xatolik: noto‘g‘ri maʼlumot' })
  create(@Body() createProfessionLevelDto: CreateProfessionLevelDto) {
    return this.professionLevelService.create(createProfessionLevelDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Barcha kasb-daraja bogʻlanishlarini olish' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli roʻyxat' })
  findAll() {
    return this.professionLevelService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Muayyan kasb-daraja bogʻlanishini olish' })
  @ApiResponse({ status: 200, description: 'Topilgan bogʻlanish' })
  @ApiResponse({ status: 404, description: 'Bogʻlanish topilmadi' })
  findOne(@Param('id') id: string) {
    return this.professionLevelService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Kasb-daraja bogʻlanishini tahrirlash' })
  @ApiResponse({
    status: 200,
    description: 'Bogʻlanish muvaffaqiyatli yangilandi',
  })
  @ApiResponse({ status: 404, description: 'Bogʻlanish topilmadi' })
  update(
    @Param('id') id: string,
    @Body() updateProfessionLevelDto: UpdateProfessionLevelDto,
  ) {
    return this.professionLevelService.update(id, updateProfessionLevelDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Kasb-daraja bogʻlanishini oʻchirish' })
  @ApiResponse({
    status: 200,
    description: 'Bogʻlanish muvaffaqiyatli oʻchirildi',
  })
  @ApiResponse({ status: 404, description: 'Bogʻlanish topilmadi' })
  remove(@Param('id') id: string) {
    return this.professionLevelService.remove(id);
  }
}
