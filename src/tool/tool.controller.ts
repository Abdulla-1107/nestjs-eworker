import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

@ApiTags('Tool') // Swagger'da bo'lim nomi
@Controller('tool')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi asbob (tool) yaratish' })
  @ApiResponse({ status: 201, description: 'Asbob muvaffaqiyatli yaratildi' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri maʼlumot kiritilgan' })
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }


  @Get('/all')
  @ApiOperation({ summary: 'Barcha asboblarni olish' })
  @ApiResponse({ status: 200, description: 'Asboblar ro‘yxati' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Sahifa raqami' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Har bir sahifadagi elementlar soni' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Qidiruv so‘zi (nom yoki tavsif)' })
  @ApiQuery({ name: 'sortBy', required: false, type: String, description: 'Saralash ustuni (masalan: price, name_uz)' })
  @ApiQuery({ name: 'sortOrder', required: false, enum: ['asc', 'desc'], description: 'Saralash tartibi' })
  @ApiQuery({ name: 'brandId', required: false, type: String, description: 'Brend ID (UUID)' })
  @ApiQuery({ name: 'capacityId', required: false, type: String, description: 'Sig‘im ID (UUID)' })
  @ApiQuery({ name: 'sizeId', required: false, type: String, description: 'O‘lcham ID (UUID)' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
    @Query('brandId') brandId?: string,
    @Query('capacityId') capacityId?: string,
    @Query('sizeId') sizeId?: string,
  ) {
    return this.toolService.findAll({ page, limit, search, sortBy, sortOrder, brandId, capacityId, sizeId });
  }
  
  

  @Get(':id')
  @ApiOperation({ summary: 'Bitta asbobni ID orqali olish' })
  @ApiParam({ name: 'id', description: 'Asbob IDsi' })
  @ApiResponse({ status: 200, description: 'Topilgan asbob' })
  @ApiResponse({ status: 404, description: 'Asbob topilmadi' })
  findOne(@Param('id') id: string) {
    return this.toolService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Asbobni yangilash' })
  @ApiParam({ name: 'id', description: 'Yangilash uchun asbob IDsi' })
  @ApiResponse({ status: 200, description: 'Asbob yangilandi' })
  @ApiResponse({ status: 404, description: 'Asbob topilmadi' })
  update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolService.update(id, updateToolDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Asbobni o‘chirish' })
  @ApiParam({ name: 'id', description: 'O‘chirish uchun asbob IDsi' })
  @ApiResponse({ status: 200, description: 'Asbob o‘chirildi' })
  @ApiResponse({ status: 404, description: 'Asbob topilmadi' })
  remove(@Param('id') id: string) {
    return this.toolService.remove(id);
  }
}
