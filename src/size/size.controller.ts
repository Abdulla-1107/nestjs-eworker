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
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SizeQueryDto } from './dto/size-query.dto';
import { Role } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { AuthGuard } from 'src/auth-guard/auth.guard';

@ApiTags('Sizes') // Swaggerda 'Sizes' nomli guruh yaratadi
@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('/create')
  @ApiOperation({ summary: 'Yangi hajm yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Yangi hajm muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 500,
    description: 'Xatolik yuz berdi',
  })
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizeService.create(createSizeDto);
  }
  @Get('/all')
  @ApiOperation({
    summary: 'Hajmlarni filter, pagination, sort va search bilan olish',
  })
  @ApiResponse({ status: 200, description: 'Hajmlar ro‘yxati' })
  findAll(@Query() query: SizeQueryDto) {
    return this.sizeService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID bo‘yicha hajmni olish' })
  @ApiResponse({
    status: 200,
    description: 'Hajm muvaffaqiyatli qaytarildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Hajm topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Xatolik yuz berdi',
  })
  findOne(@Param('id') id: string) {
    return this.sizeService.findOne(id);
  }

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Patch('/update/:id')
  @ApiOperation({ summary: 'ID bo‘yicha hajmni yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Hajm muvaffaqiyatli yangilandi',
  })
  @ApiResponse({
    status: 404,
    description: 'Hajm topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Xatolik yuz berdi',
  })
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizeService.update(id, updateSizeDto);
  }

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  @ApiOperation({ summary: 'ID bo‘yicha hajmni o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'Hajm muvaffaqiyatli o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Hajm topilmadi',
  })
  @ApiResponse({
    status: 500,
    description: 'Xatolik yuz berdi',
  })
  remove(@Param('id') id: string) {
    return this.sizeService.remove(id);
  }
}
