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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth-guard/auth.guard';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { Role } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';

@ApiBearerAuth()
@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('create')
  @ApiOperation({ summary: 'Yangi region yaratish' })
  @ApiResponse({ status: 201, description: 'Region muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yomon so‘rov.' })
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Barcha regionlarni olish' })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Regionlarni qidirish',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    description: 'Saralash maydoni',
  })
  @ApiQuery({ name: 'order', required: false, enum: ['asc', 'desc'] })
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
    description: 'Har sahifada necha natija ko‘rsatiladi',
  })
  @ApiResponse({
    status: 200,
    description: 'Barcha regionlar muvaffaqiyatli olindi.',
  })
  findAll(@Query() query: any) {
    return this.regionService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID bo‘yicha regionni olish' })
  @ApiParam({ name: 'id', type: String, description: 'Regionning ID raqami' })
  @ApiResponse({ status: 200, description: 'Region muvaffaqiyatli olindi.' })
  @ApiResponse({ status: 404, description: 'Region topilmadi.' })
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(id);
  }

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Patch('update/:id')
  @ApiOperation({ summary: 'Regionni yangilash' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Yangilanadigan regionning ID raqami',
  })
  @ApiResponse({
    status: 200,
    description: 'Region muvaffaqiyatli yangilandi.',
  })
  @ApiResponse({ status: 404, description: 'Region topilmadi.' })
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  @ApiOperation({ summary: 'Regionni o‘chirish' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'O‘chiriladigan regionning ID raqami',
  })
  @ApiResponse({
    status: 200,
    description: 'Region muvaffaqiyatli o‘chirildi.',
  })
  @ApiResponse({ status: 404, description: 'Region topilmadi.' })
  remove(@Param('id') id: string) {
    return this.regionService.remove(id);
  }
}
