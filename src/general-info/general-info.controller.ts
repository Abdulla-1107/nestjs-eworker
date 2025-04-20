import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GeneralInfoService } from './general-info.service';
import { CreateGeneralInfoDto } from './dto/create-general-info.dto';
import { UpdateGeneralInfoDto } from './dto/update-general-info.dto';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('GeneralInfo')
@Controller('general-info')
export class GeneralInfoController {
  constructor(private readonly generalInfoService: GeneralInfoService) {}

  @Post('/create')
  @ApiOperation({ summary: "Yangi umumiy ma'lumot yaratish" })
  @ApiResponse({
    status: 201,
    description: "Umumiy ma'lumot muvaffaqiyatli yaratildi",
  })
  @ApiResponse({
    status: 409,
    description: "Umumiy ma'lumot allaqachon mavjud",
  })
  create(@Body() createGeneralInfoDto: CreateGeneralInfoDto) {
    return this.generalInfoService.create(createGeneralInfoDto);
  }

  @Get('/all')
  @ApiOperation({ summary: "Barcha umumiy ma'lumotlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha umumiy ma'lumotlar muvaffaqiyatli qaytarildi",
  })
  findAll() {
    return this.generalInfoService.findGeneralInfo();
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: "Umumiy ma'lumotni yangilash" })
  @ApiParam({ name: 'id', description: "Umumiy ma'lumot IDsi" })
  @ApiResponse({
    status: 200,
    description: "Umumiy ma'lumot muvaffaqiyatli yangilandi",
  })
  @ApiResponse({
    status: 404,
    description: "Umumiy ma'lumot topilmadi",
  })
  update(
    @Param('id') id: string,
    @Body() updateGeneralInfoDto: UpdateGeneralInfoDto,
  ) {
    return this.generalInfoService.update(id, updateGeneralInfoDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: "Umumiy ma'lumotni o'chirish" })
  @ApiParam({ name: 'id', description: "Umumiy ma'lumot IDsi" })
  @ApiResponse({
    status: 200,
    description: "Umumiy ma'lumot muvaffaqiyatli o'chirildi",
  })
  @ApiResponse({
    status: 404,
    description: "Umumiy ma'lumot topilmadi",
  })
  remove(@Param('id') id: string) {
    return this.generalInfoService.remove(id);
  }
}
