import {
  IsUUID,
  IsString,
  IsDateString,
  IsDecimal,
  IsBoolean,
  IsNotEmpty,
  Min,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus, PaymentType } from 'src/Enums/order.enum';

export class CreateOrderDto {
  // @ApiProperty({
  //   description: 'Foydalanuvchi IDsi (User jadvalidagi id)',
  //   example: 'a23e4567-e89b-12d3-a456-426614174000',
  // })
  // @IsUUID()
  userId: string;

  @ApiProperty({
    description: 'Buyurtma yetkazib beriladigan manzil',
    example: 'Toshkent shahri, Chilonzor tumani, 10-kvartal, 5-uy',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Latitude (geolokatsiya bo‘yicha)',
    example: '41.311081',
  })
  @IsString()
  @IsNotEmpty()
  latitude: string;

  @ApiProperty({
    description: 'Longitude (geolokatsiya bo‘yicha)',
    example: '69.240562',
  })
  @IsString()
  @IsNotEmpty()
  longitude: string;

//   @ApiProperty({
//     description: 'Buyurtma sanasi va vaqti',
//     example: '2025-04-15T14:00:00.000Z',
//   })
  // @IsDateString()
  date: string;

  @ApiProperty({
    description: 'Buyurtmaning umumiy summasi (so‘mda)',
    example: 150000.5,
  })
  @Min(0)
  totalPrice: any; // Decimal uchun string yoki any qabul qilinadi

  @ApiProperty({
    description: 'To‘lov turi (masalan: naqd, karta, click)',
    example: 'CLICK or CASH',
  })
  @IsString()
  @IsEnum(PaymentType)
  //   @IsNotEmpty()
  paymentType: PaymentType;

  @ApiProperty({
    description: 'Yetkazib berish kerakmi yoki yo‘q',
    example: true,
  })
  @IsBoolean()
  withDelivery: boolean;

    @ApiProperty({
      description: 'Buyurtma holati (masalan: pending, accepted, delivered)',
      example: 'pending',
    })
  @IsString()
  @IsEnum(OrderStatus)
  //   @IsNotEmpty()
  status: OrderStatus;

  @ApiProperty({
    description: 'Yetkazib berish bo‘yicha qo‘shimcha izohlar',
    example: 'Qo‘ng‘iroq qilmang',
  })
  @IsString()
  @IsNotEmpty()
  deliveryComment: string;
}
