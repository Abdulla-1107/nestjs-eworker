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
  @ApiProperty({
    description: 'Foydalanuvchi F.I.O',
    example: 'John Doe',
  })
  @IsString()
  @MinLength(3, { message: 'F.I.O kamida 3 ta belgidan iborat bo‘lishi kerak' })
  fullName: string;

  @ApiProperty({
    description: 'Parol',
    example: 'Password123',
  })
  @IsString()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password: string;

  @ApiProperty({
    description: 'Telefon raqami (+998901234567 formatida)',
    example: '+998901234567',
  })
  @IsString()
  @Matches(/^\+998\d{9}$/, {
    message:
      'Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak',
  })
  phone: string;

  @ApiProperty({
    description: 'Region ID (UUID formatida)',
    example: 'f1e2b8bb-90e2-4c3f-8f80-7dbf7de2490c',
  })
  @IsUUID('4', { message: 'Region ID UUID formatida bo‘lishi kerak' })
  regionId: string;

  @ApiProperty({
    example: 'USER_YUR',
  })
  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles;

  @ApiPropertyOptional({ type: [CreateCompanyDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCompanyDto)
  company?: CreateCompanyDto[];
}
