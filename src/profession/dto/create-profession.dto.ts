import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ProfessionLevelDto } from './create-professionLevel.dto';

export class CreateProfessionDto {
  @ApiProperty({ description: "Kasb nomi o'zbek tilida", example: 'Dasturchi' })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({ description: 'Kasb nomi rus tilida', example: 'Разработчик' })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({ description: 'Kasb nomi ingliz tilida', example: 'Developer' })
  @IsString()
  @IsNotEmpty()
  name_en: string;

  @ApiProperty({
    description: 'Kasbga tegishli rasm URL manzili',
    example: 'https://example.com/image.png',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsOptional()
  isActive: boolean;

  @ApiProperty({
    type: [ProfessionLevelDto],
    description: 'Kasbga tegishli level va ularning narxlari',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProfessionLevelDto)
  professionLevel: ProfessionLevelDto[];

  @ApiProperty({
    type: [String],
    description: 'Asbob IDlar ro‘yxati',
    example: ['toolId1', 'toolId2'],
  })
  @IsArray()
  @IsString({ each: true })
  professionTools: string[];
}
