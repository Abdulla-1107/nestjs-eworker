import {
  IsUUID,
  IsInt,
  IsDecimal,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderProductDto {
  @ApiProperty({
    description: 'Buyurtma IDsi (order jadvalidan)',
    example: 'c76d1a2e-4bc5-4cf0-b7f2-4d6e404e391a',
  })
  @IsUUID()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({
    description: 'Kasb IDsi (profession jadvalidan)',
    example: 'e60dbb37-3c4f-4a23-905d-f0139498f5e9',
  })
  @IsUUID()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({
    description: 'Asbob IDsi (tool jadvalidan)',
    example: '8b4a0d62-8c53-47d6-b20b-8ff351aa3e1d',
  })
  @IsUUID()
  @IsNotEmpty()
  toolId: string;

  @ApiProperty({
    description: 'Daraja IDsi (level jadvalidan)',
    example: '55fd6efb-e70a-42c6-90dc-8ebc7111944b',
  })
  @IsUUID()
  @IsNotEmpty()
  levelId: string;

  @ApiProperty({
    description: 'Ish vaqti (necha soat yoki daqiqa)',
    example: 3,
  })
  @IsInt()
  @IsNotEmpty()
  workingTime: number;

  @ApiProperty({
    description: 'Narxi (so‘mda)',
    example: 250000.5,
  })
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Soni',
    example: 2,
  })
  @IsInt()
  @IsNotEmpty()
  count: number;

  @ApiProperty({
    description: 'Vaqt birligi (masalan: MINUTE, HOUR)',
    example: 'HOUR',
  })
  @IsString()
  @IsNotEmpty()
  timeUnit: string;
}   
