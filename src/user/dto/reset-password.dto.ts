import { IsString, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Foydalanuvchini aniqlash uchun telefon raqami',
    example: '+998991234567',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Foydalanuvchiga yangi parolni o‘rnatish',
    example: 'newSecurePassword123',
  })
  @IsString()
  @IsNotEmpty()
  @Min(5)
  newPassword: string;
}
