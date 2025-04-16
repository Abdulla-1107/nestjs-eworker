import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Order-Product') // Swagger guruh nomi
@Controller('order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Yangi buyurtma mahsulotini qo‘shish' })
  @ApiResponse({ status: 201, description: 'Buyurtma mahsuloti qo‘shildi' })
  @ApiResponse({ status: 400, description: 'Xatolik yuz berdi' })
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Barcha buyurtma mahsulotlarini olish' })
  @ApiResponse({
    status: 200,
    description: 'Buyurtmadagi mahsulotlar ro‘yxati',
  })
  findAll() {
    return this.orderProductService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID orqali buyurtma mahsulotini olish' })
  @ApiResponse({ status: 200, description: 'Topilgan mahsulot' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  findOne(@Param('id') id: string) {
    return this.orderProductService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Buyurtma mahsulotini yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Mahsulot muvaffaqiyatli yangilandi',
  })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  update(
    @Param('id') id: string,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(id, updateOrderProductDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Buyurtma mahsulotini o‘chirish' })
  @ApiResponse({ status: 200, description: 'Mahsulot o‘chirildi' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(id);
  }
}
