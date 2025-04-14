import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRegionDto {
  @ApiProperty({
    description: 'Region nomi (O‘zbekcha)',
    type: String,
    example: 'Toshkent',
  })
  @IsNotEmpty()
  @IsString()
  name_uz: string;

  @ApiProperty({
    description: 'Region nomi (Ruscha)',
    type: String,
    example: 'Tashkent',
  })
  @IsNotEmpty()
  @IsString()
  name_ru: string;

  @ApiProperty({
    description: 'Region nomi (Inglizcha)',
    type: String,
    example: 'Tashkent',
  })
  @IsNotEmpty()
  @IsString()
  name_en: string;
}
