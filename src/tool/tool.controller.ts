import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

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
  findAll() {
    return this.toolService.findAll();
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
