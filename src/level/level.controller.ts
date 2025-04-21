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
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Role } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { AuthGuard } from 'src/auth-guard/auth.guard';

@ApiTags('Level') 
@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('/create')
  @ApiOperation({ summary: 'Yangi daraja yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Yangi daraja muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 400,
    description: 'Yaratishda xatolik yuz berdi',
  })
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.levelService.create(createLevelDto);
  }

  @Get('/all')
  @ApiOperation({
    summary: 'Barcha darajalarni olish (paginate, search, sort, filter)',
  })
  @ApiResponse({
    status: 200,
    description: 'Barcha darajalar muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({
    status: 500,
    description: 'Darajalarni olishda xatolik yuz berdi',
  })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'searchField', required: false })
  @ApiQuery({ name: 'sortBy', required: false })
  @ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'] })
  @ApiQuery({ name: 'filterField', required: false })
  @ApiQuery({ name: 'filterValue', required: false })
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('searchField') searchField: string = 'name_uz',
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    @Query('filterField') filterField?: string,
    @Query('filterValue') filterValue?: string,
  ) {
    return this.levelService.findAll({
      page: Number(page),
      limit: Number(limit),
      search,
      searchField,
      sortBy,
      sortOrder,
      filterField,
      filterValue,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta darajani olish' })
  @ApiResponse({
    status: 200,
    description: 'Daraja muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Daraja topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Darajani olishda xatolik yuz berdi',
  })
  findOne(@Param('id') id: string) {
    return this.levelService.findOne(id);
  }

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Patch('/update/:id')
  @ApiOperation({ summary: 'Darajani yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Daraja muvaffaqiyatli yangilandi',
  })
  @ApiResponse({
    status: 400,
    description: 'Yangilashda xatolik yuz berdi',
  })
  @ApiResponse({
    status: 404,
    description: 'Daraja topilmadi',
  })
  update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    return this.levelService.update(id, updateLevelDto);
  }

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Darajani o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'Daraja muvaffaqiyatli o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Daraja topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Darajani o‘chirishda xatolik yuz berdi',
  })
  remove(@Param('id') id: string) {
    return this.levelService.remove(id);
  }
}
