import { Transform } from 'class-transformer';
import { IsUUID, IsInt, Min, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionLevelDto {
  @ApiProperty({
    description: 'Kasb ID (profession jadvalidagi ID)',
    example: 'a23e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  professionId: string;

  @ApiProperty({
    description: 'Daraja ID (level jadvalidagi ID)',
    example: 'c89d1234-e89b-12d3-a456-426614174222',
  })
  @IsUUID()
  levelId: string;

  @ApiProperty({
    description:
      'Minimal ishlash soatlari (kuniga ishlashi kerak bo‘lgan soat soni)',
    example: 4,
  })
  @IsInt()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({
    description: '1 soatlik ish narxi (so‘mda, masalan 15000.5)',
    example: 15000.5,
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'priceHourly faqat raqam bo‘lishi kerak' },
  )
  priceHourly: number;

  @ApiProperty({
    description: '1 kunlik ish narxi (so‘mda, masalan 100000.0)',
    example: 100000.0,
  })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'priceDaily faqat raqam bo‘lishi kerak' },
  )
  priceDaily: number;
}
