import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { MasterProfessionDto } from './masterProfession.dto';

export class CreateMasterDto {
  @ApiProperty({ description: 'Master ismi', example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'Master familiyasi', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Master telefon raqami',
    example: '+998900000000',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Master tug‘ilgan yili', example: 1990 })
  @Min(1970)
  @IsInt()
  birthYear: number;

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
  @IsString()
  @IsNotEmpty()
  about: string;

  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional({ type: [MasterProfessionDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MasterProfessionDto)
  MasterProfession?: MasterProfessionDto[];
}
