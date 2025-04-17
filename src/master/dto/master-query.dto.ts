import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, IsBoolean, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class MasterQueryDto {
  @ApiPropertyOptional({ description: 'Qidiruv (ism, familiya, telefon yoki haqida)' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ description: 'Faol holatda bo‘lgan masterlar (true/false)' })
  @IsOptional()
//   @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'Saralash maydoni',
    enum: ['firstName', 'lastName', 'birthYear', 'createdAt'],
  })
  @IsOptional()
  @IsIn(['firstName', 'lastName', 'birthYear', 'createdAt'])
  sortBy?: string;

  @ApiPropertyOptional({
    description: 'Saralash tartibi',
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';

  @ApiPropertyOptional({ description: 'Sahifa raqami (pagination)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  page?: number;

  @ApiPropertyOptional({ description: 'Bir sahifadagi elementlar soni (pagination)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  limit?: number;
}
