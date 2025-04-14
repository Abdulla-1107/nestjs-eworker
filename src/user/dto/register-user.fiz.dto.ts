import { IsString, MinLength, Matches, IsUUID, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserFiz {
  @ApiProperty({ description: 'Foydalanuvchi F.I.O' })
  @IsString()
  @MinLength(3, { message: 'F.I.O kamida 3 ta belgidan iborat bo‘lishi kerak' })
  fullName: string;

  @ApiProperty({ description: 'Parol' })
  @IsString()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password: string;

  @ApiProperty({ description: 'Telefon raqami (+998901234567 formatida)' })
  @IsString()
  @Matches(/^\+998\d{9}$/, {
    message:
      'Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak',
  })
  @Length(13, 13, { message: 'Telefon raqami 13 raqamdan iborat bo‘lishi' })
  phone: string;

  @ApiProperty({ description: 'Region ID (UUID formatida)' })
  @IsUUID('4', { message: 'Region ID UUID formatida bo‘lishi kerak' })
  regionId: string;
}
