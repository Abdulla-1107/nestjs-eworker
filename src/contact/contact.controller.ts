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
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('Contact') // Swagger'da tag nomi
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi contact yaratish' })
  @ApiResponse({ status: 201, description: 'Contact muvaffaqiyatli yaratildi' })
  @ApiBody({ type: CreateContactDto })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Barcha contactlarni olish' })
  @ApiResponse({ status: 200, description: 'Contactlar ro‘yxati' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: "Har sahifada nechta natija ko'rsatiladi" })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Sahifa raqami' })
  @ApiQuery({ name: 'order', required: false, enum: ['asc', 'desc'], description: 'Saralash tartibi: asc | desc' })
  @ApiQuery({ name: 'sortBy', required: false, enum: ['name', 'phone'], type: String, description: 'Saralash maydoni (masalan: name, phone)' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Contactlar ichidan qidirish' })
  findAll(
    @Query('limit') limit?: number,
    @Query('page') page?: number,
    @Query('order') order?: 'asc' | 'desc',
    @Query('sortBy') sortBy?: string,
    @Query('search') search?: string,
  ) {
    return this.contactService.findAll({ limit, page, order, sortBy, search });
  }


  @Get(':id')
  @ApiOperation({ summary: 'ID orqali bitta contactni olish' })
  @ApiParam({ name: 'id', description: 'Contact ID raqami' })
  @ApiResponse({ status: 200, description: 'Topilgan contact' })
  @ApiResponse({ status: 404, description: 'Contact topilmadi' })
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Contactni yangilash' })
  @ApiParam({
    name: 'id',
    description: 'Yangilanishi kerak bo‘lgan contact IDsi',
  })
  @ApiResponse({
    status: 200,
    description: 'Contact muvaffaqiyatli yangilandi',
  })
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Contactni o‘chirish' })
  @ApiParam({
    name: 'id',
    description: 'O‘chiriladigan contact IDsi',
  })
  @ApiResponse({
    status: 200,
    description: 'Contact muvaffaqiyatli o‘chirildi',
  })
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
