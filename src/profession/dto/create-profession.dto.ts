import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateProfessionDto {
  @ApiProperty({
    description: "Kasb nomi o'zbek tilida",
    example: 'Dasturchi',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    description: 'Kasb nomi rus tilida',
    example: 'Разработчик',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    description: 'Kasb nomi ingliz tilida',
    example: 'Developer',
  })
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

  // @ApiProperty({
  //   description: 'Kasb faol yoki yo\'qligi',
  //   example: true,
  // })
  // @IsBoolean()
  isActive: boolean;
}
