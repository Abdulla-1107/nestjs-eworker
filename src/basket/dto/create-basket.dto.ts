import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsEnum,
  IsOptional,
  IsUUID,
  IsNumber,
  Min,
} from 'class-validator';
import { TimeUnit } from 'src/Enums/order.enum';

export class CreateBasketDto {
  @ApiProperty({
    description: 'Profession ID associated with the basket item',
    example: 'fd243128-d782-4ead-a0b0-fce542ca029b',
    required: false, // Optional
  })
  @IsUUID()
  @IsOptional()
  professionId?: string;

  @ApiProperty({
    description: 'Tool ID associated with the basket item',
    example: 'f35076cf-586d-464d-a20c-15a0a03e0b8d',
    required: false, // Optional
  })
  @IsUUID()
  @IsOptional()
  toolId?: string;

  @ApiProperty({
    description: 'Level ID associated with the basket item',
    example: '116a7ef5-d5fe-46de-858b-99aeb565ccb9',
    required: false, // Optional
  })
  @IsUUID()
  @IsOptional()
  levelId?: string;

  @ApiProperty({
    description: 'The count of the item in the basket',
    example: 10,
  })
  @IsInt()
  @Min(1)
  count: number;

  @ApiProperty({
    description: 'The working time associated with the basket item',
    example: 8,
    required: false, // Optional
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  workingTime?: number;

  @ApiProperty({
    description: 'Total price of the basket item',
    example: 700,
  })
  @IsNumber()
  @Min(1)
  totalPrice: number;

  @ApiProperty({
    description: 'Time unit for the basket item (e.g. HOURLY, DAILY)',
    example: 'HOURLY',
    enum: TimeUnit, // Enum dan foydalanish
  })
  @IsEnum(TimeUnit)
  timeUnit: TimeUnit;
}
