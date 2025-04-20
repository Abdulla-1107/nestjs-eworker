// create-company.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  inn: string;

  @ApiProperty()
  @IsString()
  account: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bank?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  mfo?: string;
}
