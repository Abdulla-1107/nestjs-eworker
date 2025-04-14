import {
  IsString,
  MinLength,
  Matches,
  IsNumber,
  IsUUID,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserYur {
  @ApiProperty({ description: 'Foydalanuvchi F.I.O (Direktor)' })
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
  // @Length(13, 13, {
  //   message:
  //     'Telefon raqami 13 raqamdan iborat bo‘lishi kerak (+998 va 9 raqam)',
  // })
  phone: string;

  @ApiProperty({ description: 'Region ID (UUID formatida)' })
  @IsUUID('4', { message: 'Region ID UUID formatida bo‘lishi kerak' })
  regionId: string;

  @ApiProperty({ description: 'INN (9 raqamli)' })
  @IsString()
  // @Matches(/^\d{9}$/, { message: 'INN 9 ta raqamdan iborat bo‘lishi kerak' })
  inn: string;

  @ApiProperty({ description: 'Bank nomi' })
  @IsString()
  // @MinLength(3, { message: 'Bank nomi kiritilishi kerak' })
  bank: string;

  @ApiProperty({ description: 'MFO (5 raqamli)' })
  @IsString()
  @Matches(/^\d{5}$/, { message: 'MFO 5 ta raqamdan iborat bo‘lishi kerak' })
  mfo: string;

  @ApiProperty({ description: 'Oylik miqdori' })
  @IsNumber()
  salary: number;

  @ApiProperty({ description: 'Hisob raqami' })
  @IsString()
  // @MinLength(10, { message: 'Hisob raqami kiritilishi kerak' })
  account: string;

  @ApiProperty({ description: 'Manzil' })
  @IsString()
  // @MinLength(5, { message: 'Manzil kiritilishi kerak' })
  address: string;
}
