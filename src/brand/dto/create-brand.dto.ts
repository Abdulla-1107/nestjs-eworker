import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'Samsung', description: 'Brend nomi (o‘zbek tilida)' })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({ example: 'Самсунг', description: 'Brend nomi (rus tilida)' })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({ example: 'Samsung', description: 'Brend nomi (ingliz tilida)' })
  @IsString()
  @IsNotEmpty()
  name_en: string;
}
