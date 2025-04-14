import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginUser {
  @ApiProperty({ description: 'Telefon raqami (+998901234567 formatida)' })
  @IsString()
  @Matches(/^\+998\d{9}$/, {
    message:
      'Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak',
  })
  phone: string;
  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
