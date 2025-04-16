import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';

export class UpdateMasterDto {
  @ApiProperty({ description: 'Master ismi', example: 'John' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ description: 'Master familiyasi', example: 'Doe' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    description: 'Master telefon raqami',
    example: '+998900000000',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'Master tug‘ilgan yili', example: 1990 })
  @IsOptional()
  @IsInt()
  birthYear?: number;

  @ApiProperty({ description: 'Master faol yoki emasligi', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Master rasmini URL', example: 'image_url' })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    description: 'Master pasport rasmini URL',
    example: 'passport_image_url',
  })
  @IsOptional()
  @IsString()
  passportImg?: string;

  @ApiProperty({
    description: 'Master haqidagi ma’lumot',
    example: 'Tajribali master',
  })
  @IsOptional()
  @IsString()
  about?: string;

//   @ApiProperty({
//     description: 'Yaratilish vaqti',
//     example: '2025-04-15T10:00:00Z',
//   })
  @IsOptional()
  createdAt?: Date;
}
