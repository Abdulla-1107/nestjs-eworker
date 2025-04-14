import {
  IsOptional,
  IsString,
  MinLength,
  Matches,
  IsUUID,
  Length,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserFizDto {
  @ApiPropertyOptional({ description: 'Foydalanuvchi F.I.O' })
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'F.I.O kamida 3 ta belgidan iborat bo‘lishi kerak' })
  fullName?: string;

  @ApiPropertyOptional({ description: 'Parol' })
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password?: string;

  @ApiPropertyOptional({
    description: 'Telefon raqami (+998901234567 formatida)',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\+998\d{9}$/, {
    message:
      'Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak',
  })
  @Length(13, 13, {
    message: 'Telefon raqami 13 belgidan iborat bo‘lishi kerak',
  })
  phone?: string;

  @ApiPropertyOptional({ description: 'Region ID (UUID formatida)' })
  @IsOptional()
  @IsUUID('4', { message: 'Region ID UUID formatida bo‘lishi kerak' })
  regionId?: string;
}
