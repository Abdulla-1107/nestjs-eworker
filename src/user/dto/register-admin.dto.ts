import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsUUID, Matches, MinLength } from 'class-validator';
import { RolesAdmin } from 'src/Enums/user.role';

export class RegisterAdmin {
  @ApiProperty({
    description: 'Admin F.I.O',
    example: 'Jane Doe',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    description: 'Admin Password',
    example: 'AdminPassword123',
  })
  @IsString()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password: string;

  @ApiProperty({
    description: 'Admin Telefon Raqami',
    example: '+998901234567',
  })
  @IsString()
  @Matches(/^\+998\d{9}$/, {
    message:
      'Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak',
  })
  phone: string;

  @ApiProperty({
    description: 'Region ID (UUID formatida)',
    example: 'f1e2b8bb-90e2-4c3f-8f80-7dbf7de2490c',
  })
  @IsUUID('4', { message: 'Region ID UUID formatida bo‘lishi kerak' })
  regionId: string;

  @ApiProperty({
    description: 'Admin Role',
    example: 'SUPER_ADMIN',
  })
  @IsString()
  @IsEnum(RolesAdmin)
  role: RolesAdmin;
}
