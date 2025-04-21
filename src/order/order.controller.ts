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
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from 'src/auth-guard/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';
import { RolesGuard } from 'src/auth-guard/role.guard';

@ApiTags('Order')
@ApiBearerAuth()
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
  @Get('/all')
  @ApiOperation({ summary: 'Barcha buyurtmalarni olish (filtrlash bilan)' })
  @ApiResponse({ status: 200, description: 'Barcha buyurtmalar ro‘yxati' })

  @ApiQuery({ name: 'with_delivery', enum: ['true', 'false'], required: false })
  @ApiQuery({ name: 'payment_type', enum: ['CLICK', 'PAYME', 'CASH'], required: false })
  @ApiQuery({
    name: 'status',
    enum: ['ACTIVE', 'INACTIVE', 'PENDING', 'FINISHED', 'CANCELLED'],
    required: false,
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'orderBy', enum: ['asc', 'desc'], required: false })
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('with_delivery') withDelivery?: string,
    @Query('payment_type') paymentType?: string,
    @Query('status') status?: string,
    @Query('sortBy') sortBy = 'date',
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'desc',
  ) {
    return this.orderService.findAll({
      page: Number(page),
      limit: Number(limit),
      withDelivery,
      paymentType,
      status,
      sortBy,
      orderBy,
    });
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

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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
