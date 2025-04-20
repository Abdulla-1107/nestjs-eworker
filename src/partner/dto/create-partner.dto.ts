import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty({
    description: 'Hamkorning o\'zbek tilidagi nomi',
    example: 'O‘zbekiston Tadbirkorlar Assotsiatsiyasi',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    description: 'Hamkorning rus tilidagi nomi',
    example: 'Ассоциация предпринимателей Узбекистана',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    description: 'Hamkorning ingliz tilidagi nomi',
    example: 'Uzbekistan Entrepreneurs Association',
  })
  @IsString()
  @IsNotEmpty()
  name_en: string;

  @ApiProperty({
    description: 'Hamkorning rasm URL manzili',
    example: 'https://example.com/images/partner-logo.png',
  })
  @IsUrl()
  @IsNotEmpty()
  image: string;
}

export class UpdatePartnerDto {
  @ApiProperty({
    description: 'Hamkorning o\'zbek tilidagi nomi',
    example: 'O‘zbekiston Tadbirkorlar Assotsiatsiyasi',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    description: 'Hamkorning rus tilidagi nomi',
    example: 'Ассоциация предпринимателей Узбекистана',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    description: 'Hamkorning ingliz tilidagi nomi',
    example: 'Uzbekistan Entrepreneurs Association',
  })
  @IsString()
  @IsNotEmpty()
  name_en: string;

  @ApiProperty({
    description: 'Hamkorning rasm URL manzili',
    example: 'https://example.com/images/partner-logo.png',
  })
  @IsUrl()
  @IsNotEmpty()
  image: string;
}
