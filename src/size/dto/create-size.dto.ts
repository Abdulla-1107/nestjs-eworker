import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSizeDto {
  @ApiProperty({ example: 'Kichik', description: 'Hajm nomi (o‘zbek tilida)' })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({ example: 'Маленький', description: 'Hajm nomi (rus tilida)' })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({ example: 'Small', description: 'Hajm nomi (ingliz tilida)' })
  @IsString()
  @IsNotEmpty()
  name_en: string;
}
