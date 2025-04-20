import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // Authorization headerdan token olish

    if (!token) {
      throw new UnauthorizedException('Token topilmadi'); // Agar token bo‘lmasa xato
    }

    try {
      // Tokenni tekshirish va ma'lumotni olish
      const data = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET, // secretni aniqlash (agar kerak bo‘lsa)
        ignoreExpiration: false, // Expired tokenni tekshirish
      });

      request['user'] = data; // Foydalanuvchi ma'lumotlarini so'rovga qo'shish
      return true;
    } catch (error) {
      // Agar token noto'g'ri bo'lsa
      throw new UnauthorizedException('Xato token yoki muddati tugagan');
    }
  }
}
