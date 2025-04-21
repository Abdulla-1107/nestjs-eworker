import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, IsEnum } from 'class-validator';
import { Type } from 'class-transformer'; // Type ni import qilamiz

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class SizeQueryDto {
  @ApiProperty({
    description: 'Qidiruv so‘zi (name_uz, name_ru, name_en bo‘yicha)',
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ description: 'Sahifa raqami', required: false })
  @IsOptional()
  @Type(() => Number) // String dan number ga aylantirish
  @IsInt()
  page?: number = 1;

  @ApiProperty({
    description: 'Har sahifadagi elementlar soni',
    required: false,
  })
  @IsOptional()
  @Type(() => Number) // String dan number ga aylantirish
  @IsInt()
  limit?: number = 10;

  @ApiProperty({
    description: 'Saralash maydoni',
    required: false,
  })
  @IsOptional()
  @IsString()
  sortBy?: string = 'name_uz';

  @ApiProperty({
    description: 'Saralash tartibi',
    enum: SortOrder,
    required: false,
  })
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder = SortOrder.ASC;

  @ApiProperty({
    description: 'Filtrlash uchun name_uz',
    required: false,
  })
  @IsOptional()
  @IsString()
  name_uz?: string;

  @ApiProperty({
    description: 'Filtrlash uchun name_ru',
    required: false,
  })
  @IsOptional()
  @IsString()
  name_ru?: string;

  @ApiProperty({
    description: 'Filtrlash uchun name_en',
    required: false,
  })
  @IsOptional()
  @IsString()
  name_en?: string;
}