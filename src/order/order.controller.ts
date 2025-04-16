import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from 'src/auth-guard/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Order') // Swagger sahifasida grouping
@ApiBearerAuth() // Token kerak bo‘lgan joyda qo‘llaniladi
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  @ApiOperation({
    summary: 'Yangi buyurtma yaratish',
    description: 'Foydalanuvchi yangi buyurtma yaratadi',
  })
  @ApiResponse({
    status: 201,
    description: 'Buyurtma muvaffaqiyatli yaratildi',
  })
  @ApiResponse({ status: 400, description: 'Xatolik: noto‘g‘ri ma’lumot' })
  create(@Body() createOrderDto: CreateOrderDto, @Req() req: Request) {
    const userId = req['user'].id;
    return this.orderService.create(createOrderDto, userId);
  }

  @Get("/all")
  @ApiOperation({
    summary: 'Barcha buyurtmalarni olish',
    description: 'Tizimdagi barcha buyurtmalar ro‘yxatini olish',
  })
  @ApiResponse({ status: 200, description: 'Barcha buyurtmalar ro‘yxati' })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Bitta buyurtmani olish',
    description: 'ID bo‘yicha bitta buyurtma ma’lumotini olish',
  })
  @ApiResponse({ status: 200, description: 'Topilgan buyurtma' })
  @ApiResponse({ status: 404, description: 'Buyurtma topilmadi' })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch('/update/:id')
  @ApiOperation({
    summary: 'Buyurtmani yangilash',
    description: 'ID bo‘yicha buyurtma ma’lumotlarini o‘zgartirish',
  })
  @ApiResponse({
    status: 200,
    description: 'Buyurtma muvaffaqiyatli yangilandi',
  })
  @ApiResponse({ status: 404, description: 'Buyurtma topilmadi' })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete('/delete/:id')
  @ApiOperation({
    summary: 'Buyurtmani o‘chirish',
    description: 'ID bo‘yicha buyurtmani tizimdan o‘chirish',
  })
  @ApiResponse({
    status: 200,
    description: 'Buyurtma muvaffaqiyatli o‘chirildi',
  })
  @ApiResponse({ status: 404, description: 'Buyurtma topilmadi' })
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
