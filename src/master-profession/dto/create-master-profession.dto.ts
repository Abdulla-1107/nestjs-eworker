import { IsUUID, IsInt, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateMasterProfessionDto {
  @ApiProperty({
    description: 'Kasb ID (profession jadvalidagi ID)',
    example: 'a23e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  professionId: string;

  @ApiProperty({
    description: 'Usta ID (master jadvalidagi ID)',
    example: 'b76f1234-e89b-12d3-a456-426614174111',
  })
  @IsUUID()
  masterId: string;

  @ApiProperty({
    description: 'Daraja ID (level jadvalidagi ID)',
    example: 'c89d1234-e89b-12d3-a456-426614174222',
  })
  @IsUUID()
  levelId: string;

  @ApiProperty({
    description: 'Minimal ishlash soatlari (kuniga nechta soat ishlashi kerak)',
    example: 4,
    type: Number,
  })
  @IsInt()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({
    description: '1 soatlik ish narxi (so‘mda)',
    example: 15000.5,
    type: Number,
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber({}, { message: 'Narx raqam bo‘lishi kerak' })
  @Min(1)
  priceHourly: number;

  @ApiProperty({
    description: '1 kunlik ish narxi (so‘mda)',
    example: 100000.0,
    type: Number,
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber({}, { message: 'Kunlik narx raqam bo‘lishi kerak' })
  @Min(1)
  priceDaily: number;

  @ApiProperty({
    description: 'Ustaning umumiy tajribasi (yillarda, masalan: 1.5 yil)',
    example: 2.5,
    type: Number,
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber({}, { message: 'Tajriba yillari raqam bo‘lishi kerak' })
  @Min(1)
  experience: number;
}
