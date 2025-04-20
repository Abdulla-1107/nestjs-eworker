import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  IsNumber,
  Matches,
  MinLength,
  Length,
  IsUUID,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Roles } from 'src/Enums/user.role';
import { CreateCompanyDto } from './create-company-dto';

export class RegisterDto {
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
  //   @Length(13, 13, { message: 'Telefon raqami 13 raqamdan iborat bo‘lishi' })
  phone: string;

  @ApiProperty({ description: 'Region ID (UUID formatida)' })
  @IsUUID('4', { message: 'Region ID UUID formatida bo‘lishi kerak' })
  regionId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles; // string ko'rinishida, UserRole emas

  // USER_YUR uchun qo‘shimcha company fieldi
  @ApiPropertyOptional({ type: [CreateCompanyDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCompanyDto)
  company?: CreateCompanyDto[];
}
