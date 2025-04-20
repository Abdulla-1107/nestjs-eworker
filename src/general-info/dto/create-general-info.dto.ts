import { IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGeneralInfoDto {
  @ApiProperty({
    description: 'Telefon raqami (majburiy)',
    example: '+998901234567',
  })
  @IsNotEmpty({ message: 'Telefon raqami majburiy' })
  @IsString({ message: 'Telefon raqami matn bo‘lishi kerak' })
  phone: string;

  @ApiProperty({
    description: 'Email manzili (majburiy)',
    example: 'example@gmail.com',
  })
  @IsNotEmpty({ message: 'Email manzili majburiy' })
  @IsEmail({}, { message: 'Email noto‘g‘ri formatda kiritilgan' })
  email: string;

  @ApiProperty({
    description: 'Manzil (ixtiyoriy)',
    example: 'Toshkent shahri, Chilonzor tumani',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Manzil matn bo‘lishi kerak' })
  address?: string;

  @ApiProperty({
    description: 'Telegram foydalanuvchi nomi (ixtiyoriy)',
    example: '@username',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Telegram foydalanuvchi nomi matn bo‘lishi kerak' })
  telegram?: string;

  @ApiProperty({
    description: 'Instagram foydalanuvchi nomi (ixtiyoriy)',
    example: '@insta_user',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Instagram foydalanuvchi nomi matn bo‘lishi kerak' })
  instagram?: string;

  @ApiProperty({
    description: 'Qo‘shimcha maʼlumot yoki izoh (ixtiyoriy)',
    example: 'Bu kompaniya haqida qisqacha izoh.',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Tavsif matn bo‘lishi kerak' })
  description?: string;
}
