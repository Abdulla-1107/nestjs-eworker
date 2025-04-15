import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCapacityDto {
  @ApiProperty({
    example: '500 Vatt',
    description: 'Quvvat nomi (o‘zbek tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({ example: '500 Ватт', description: 'Quvvat nomi (rus tilida)' })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    example: '500 Watt',
    description: 'Quvvat nomi (ingliz tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_en: string;
}
