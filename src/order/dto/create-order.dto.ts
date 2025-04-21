import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
  IsNumber,
  Min,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { OrderStatus, PaymentType } from 'src/Enums/order.enum';
import { OrderProductDto } from './create-orderProduct.dto';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Buyurtma yetkazib beriladigan manzil',
    example: '123 Main St',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Latitude (geolokatsiya)',
    example: '40.7128',
  })
  @IsString()
  @IsNotEmpty()
  latitude: string;

  @ApiProperty({
    description: 'Longitude (geolokatsiya)',
    example: '-74.0060',
  })
  @IsString()
  @IsNotEmpty()
  longitude: string;

  @ApiProperty({
    description: 'Buyurtma sanasi',
    example: '2025-04-21T14:00:00Z',
  })
  @IsDateString()
  date: string;

  @ApiProperty({
    description: 'Buyurtmaning umumiy summasi (so‘mda)',
    example: 100,
  })
  @IsNumber()
  @Min(0)
  totalPrice: number;

  @ApiProperty({
    description: 'To‘lov turi',
    enum: PaymentType,
    example: PaymentType.CASH,
  })
  @IsEnum(PaymentType)
  paymentType: PaymentType;

  @ApiProperty({
    description: 'Yetkazib berish kerakmi',
    example: true,
  })
  @IsBoolean()
  withDelivery: boolean;

  @ApiProperty({
    description: 'Yetkazib berish bo‘yicha izoh',
    example: 'Leave at the door',
  })
  @IsString()
  @IsNotEmpty()
  deliveryComment: string;

  @ApiProperty({
    description: 'Buyurtmadagi mahsulotlar yoki xizmatlar ro‘yxati',
    type: [OrderProductDto],
    example: [
      {
        professionId: 'd1a48805-2ed4-4387-8a59-c8d8582535f0',
        levelId: 'cf02d2b4-428f-4cce-903b-bd07668052a5',
        count: 2,
        timeUnit: 'HOURLY',
        workingTime: 8,
        price: 500,
      },
      {
        toolId: '13252aaf-3d57-49e4-8611-e44333d2dff5',
        count: 10,
        price: 700,
      },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => OrderProductDto)
  orderProducts: OrderProductDto[];
}
