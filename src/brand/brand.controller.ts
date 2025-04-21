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
import {
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Role } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { AuthGuard } from 'src/auth-guard/auth.guard';

@ApiBearerAuth()
@ApiTags('Brend') // Swagger hujjatlarida bu controllerni "Brendlar" deb nomlaymiz
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('/create')
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

  @Get('/all')
  @ApiOperation({
    summary: 'Barcha brendlarni olish (pagination, filter, sort, search)',
  })
  @ApiResponse({ status: 200, description: 'Brendlar muvaffaqiyatli olindi' })
  @ApiResponse({ status: 500, description: 'Brendlarni olishda xatolik' })
  @ApiQuery({
    name: 'page',
    required: false,
    example: 1,
    description: 'Sahifa raqami',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 10,
    description: 'Har bir sahifadagi elementlar soni',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'Samsung',
    description: 'Brend nomi bo‘yicha qidirish',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    example: 'name_uz',
    description: 'Saralash maydoni (masalan: name_uz, createdAt)',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    example: 'asc',
    description: 'Saralash tartibi: asc yoki desc (standart: desc)',
  })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    return this.brandService.findAll({
      page,
      limit,
      search,
      sortBy,
      sortOrder,
    });
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

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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
