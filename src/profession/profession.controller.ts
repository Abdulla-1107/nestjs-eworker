import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { UsersRole } from 'src/Enums/user.role';
import { Role } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { AuthGuard } from 'src/auth-guard/auth.guard';

@ApiTags('Profession')
@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Sahifa raqami',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Elementlar soni',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Qidiruv so‘zi (nom bo‘yicha)',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    enum: ['name_uz', 'name_ru', 'name_en', 'createdAt'],
    type: String,
    description: 'Saralash ustuni (masalan: name_uz)',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    description: 'Saralash tartibi',
  })
  @ApiQuery({
    name: 'isActive',
    required: false,
    type: Boolean,
    description: 'Faollik holati bo‘yicha filter',
  })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
    @Query('isActive') isActive?: boolean,
  ) {
    return this.professionService.findAll({
      page,
      limit,
      search,
      sortBy,
      sortOrder,
      isActive,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID orqali kasb olish' })
  @ApiResponse({ status: 200, description: 'Topilgan kasb' })
  @ApiResponse({ status: 404, description: 'Kasb topilmadi' })
  findOne(@Param('id') id: string) {
    return this.professionService.findOne(id);
  }

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Kasbni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Kasb muvaffaqiyatli o‘chirildi' })
  @ApiResponse({ status: 404, description: 'O‘chirish uchun kasb topilmadi' })
  remove(@Param('id') id: string) {
    return this.professionService.remove(id);
  }
}
