import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsUUID, Min } from 'class-validator';

export class MasterProfessionDto {
  @ApiProperty({ description: 'Kasb ID', example: 'uuid' })
  @IsUUID()
  professionId: string;

  @ApiProperty({ description: 'Daraja ID', example: 'uuid' })
  @IsUUID()
  levelId: string;

  @ApiProperty({ description: 'Min ishlash soatlari', example: 4 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({ description: '1 soatlik narx', example: 15000.5 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  priceHourly: number;

  @ApiProperty({ description: '1 kunlik narx', example: 100000 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  priceDaily: number;

  @ApiProperty({ description: 'Tajriba yillarda', example: 2.5 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  experience: number;
}
