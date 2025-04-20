import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateToolDto {
  @ApiProperty({ example: 'Qurilish asbobi', description: 'Nomi (UZ)' })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({ example: 'Строительный инструмент', description: 'Nomi (RU)' })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({ example: 'Construction tool', description: 'Nomi (EN)' })
  @IsString()
  @IsNotEmpty()
  name_en: string;

  @ApiProperty({
    example: 'Bu qurilishda ishlatiladi',
    description: 'Tavsifi (UZ)',
  })
  @IsString()
  @IsNotEmpty()
  desc_uz: string;

  @ApiProperty({
    example: 'Используется в строительстве',
    description: 'Tavsifi (RU)',
  })
  @IsString()
  @IsNotEmpty()
  desc_ru: string;

  @ApiProperty({ example: 'Used in construction', description: 'Tavsifi (EN)' })
  @IsString()
  @IsNotEmpty()
  desc_en: string;

  @ApiProperty({ example: 'tool.jpg', description: 'Rasm fayli' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: 150000, description: 'Narxi (so‘mda)' })
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  price: number;

  @ApiProperty({ example: 10, description: 'Miqdori' })
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  quantity: number;

  @IsOptional()
  @IsInt()
  code?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ example: 'brand-uuid', description: 'Brend ID (UUID)' })
    @IsUUID()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({ example: 'capacity-uuid', description: 'Sig‘im ID (UUID)' })
    @IsUUID()
  @IsNotEmpty()
  capacityId: string;

  @ApiProperty({ example: 'size-uuid', description: 'O‘lcham ID (UUID)' })
    @IsUUID()
  @IsNotEmpty()
  sizeId: string;
}
