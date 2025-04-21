import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';
import { TimeUnit } from 'src/Enums/order.enum';

export class OrderProductDto {
  @ApiPropertyOptional({
    description: 'Xizmat ID (profession)',
    example: 'd1a48805-2ed4-4387-8a59-c8d8582535f0',
  })
  @IsOptional()
  @IsUUID()
  professionId?: string;

  @ApiPropertyOptional({
    description: 'Xizmat darajasi ID (level)',
    example: 'cf02d2b4-428f-4cce-903b-bd07668052a5',
  })
  @IsOptional()
  @IsUUID()
  levelId?: string;

  @ApiPropertyOptional({
    description: 'Asbob ID (tool)',
    example: '13252aaf-3d57-49e4-8611-e44333d2dff5',
  })
  @IsOptional()
  @IsUUID()
  toolId?: string;

  @ApiPropertyOptional({
    description: 'Vaqt birligi (HOURLY yoki DAILY)',
    enum: TimeUnit,
    example: 'HOURLY',
  })
  @IsOptional()
  @IsEnum(TimeUnit)
  timeUnit?: TimeUnit;

  @ApiPropertyOptional({ description: 'Ishlash soatlari', example: 8 })
  @IsOptional()
  @IsNumber()
  workingTime?: number;

  @ApiPropertyOptional({ description: 'Miqdori', example: 2 })
  @IsNumber()
  @Min(1)
  count: number;

  @ApiPropertyOptional({ description: 'Narxi', example: 500 })
  @IsNumber()
  @Min(0)
  price: number;
}
