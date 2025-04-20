import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShowcaseDto {
  @ApiProperty({
    description: 'Mahsulot nomi (O\'zbekcha)',
    example: 'Telefon',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    description: 'Mahsulot nomi (Ruscha)',
    example: 'Телефон',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    description: 'Mahsulot nomi (Inglizcha)',
    example: 'Phone',
  })
  @IsString()
  @IsNotEmpty()
  name_en: string;

  @ApiProperty({
    description: 'Mahsulot tavsifi (O\'zbekcha)',
    example: 'Yuqori sifatli telefon',
  })
  @IsString()
  @IsNotEmpty()
  desc_uz: string;

  @ApiProperty({
    description: 'Mahsulot tavsifi (Ruscha)',
    example: 'Высококачественный телефон',
  })
  @IsString()
  @IsNotEmpty()
  desc_ru: string;

  @ApiProperty({
    description: 'Mahsulot tavsifi (Inglizcha)',
    example: 'High-quality phone',
  })
  @IsString()
  @IsNotEmpty()
  desc_en: string;

  @ApiProperty({
    description: 'Mahsulot rasmi',
    example: 'https://www.example.com/images/phone.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    description: 'Mahsulotga olib boruvchi havola',
    example: 'https://www.example.com/product/phone',
  })
  @IsUrl()
  @IsNotEmpty()
  link: string;
}
