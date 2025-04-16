import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Master') 
@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Yangi master yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Master muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 400,
    description: 'Noto‘g‘ri maʼlumot kiritilgan',
  })
  @ApiBody({ type: CreateMasterDto }) // request body tipi
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Barcha masterlarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Masterlar ro‘yxati',
  })
  findAll() {
    return this.masterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta masterni ID bo‘yicha olish' })
  @ApiParam({ name: 'id', description: 'Master IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Topilgan master',
  })
  @ApiResponse({
    status: 404,
    description: 'Master topilmadi',
  })
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Masterni yangilash' })
  @ApiParam({ name: 'id', description: 'Yangilash uchun master IDsi' })
  @ApiBody({ type: UpdateMasterDto }) // request body tipi
  @ApiResponse({
    status: 200,
    description: 'Master yangilandi',
  })
  @ApiResponse({
    status: 404,
    description: 'Master topilmadi',
  })
  update(
    @Param('id') id: string,
    @Body() updateMasterDto: UpdateMasterDto,
  ) {
    return this.masterService.update(id, updateMasterDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Masterni o‘chirish' })
  @ApiParam({ name: 'id', description: 'O‘chirish uchun master IDsi' })
  @ApiResponse({
    status: 200,
    description: 'Master o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Master topilmadi',
  })
  remove(@Param('id') id: string) {
    return this.masterService.remove(id);
  }
}
