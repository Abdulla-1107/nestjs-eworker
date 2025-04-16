import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterProfessionService } from './master-profession.service';
import { CreateMasterProfessionDto } from './dto/create-master-profession.dto';
import { UpdateMasterProfessionDto } from './dto/update-master-profession.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Master-Profession') // Swagger bo‘lim nomi
@Controller('master-profession')
export class MasterProfessionController {
  constructor(
    private readonly masterProfessionService: MasterProfessionService,
  ) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi usta-kasb bog‘lanishini yaratish' })
  @ApiResponse({ status: 201, description: 'Muvaffaqiyatli yaratildi' })
  create(@Body() createMasterProfessionDto: CreateMasterProfessionDto) {
    return this.masterProfessionService.create(createMasterProfessionDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Barcha usta-kasb bog‘lanishlarini olish' })
  @ApiResponse({
    status: 200,
    description: 'Bog‘lanishlar ro‘yxati',
  })
  findAll() {
    return this.masterProfessionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta usta-kasb bog‘lanishini olish' })
  @ApiParam({
    name: 'id',
    description: 'MasterProfession ID',
    example: 'd52a2e45-dfa1-4a2a-8c5a-c123456789ab',
  })
  @ApiResponse({ status: 200, description: 'Topilgan bog‘lanish ma’lumotlari' })
  @ApiResponse({ status: 404, description: 'Bog‘lanish topilmadi' })
  findOne(@Param('id') id: string) {
    return this.masterProfessionService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Usta-kasb bog‘lanishini yangilash' })
  @ApiParam({ name: 'id', description: 'MasterProfession ID' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli yangilandi' })
  @ApiResponse({ status: 404, description: 'Yangilash uchun topilmadi' })
  update(
    @Param('id') id: string,
    @Body() updateMasterProfessionDto: UpdateMasterProfessionDto,
  ) {
    return this.masterProfessionService.update(id, updateMasterProfessionDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Usta-kasb bog‘lanishini o‘chirish' })
  @ApiParam({ name: 'id', description: 'MasterProfession ID' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli o‘chirildi' })
  @ApiResponse({ status: 404, description: 'O‘chirish uchun topilmadi' })
  remove(@Param('id') id: string) {
    return this.masterProfessionService.remove(id);
  }
}
