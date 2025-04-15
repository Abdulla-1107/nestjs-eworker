import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLevelDto {
  @ApiProperty({
    example: 'Boshlangʻich',
    description: 'Daraja nomi (o‘zbek tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    example: 'Начальный',
    description: 'Daraja nomi (rus tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    example: 'Beginner',
    description: 'Daraja nomi (ingliz tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_en: string;
}
