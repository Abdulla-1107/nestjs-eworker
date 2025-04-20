import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { OtpService } from '../otp/otp.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterAdmin } from './dto/register-admin.dto';
import { LoginUser } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register-user.dto';
import { ChangePasswordDto } from './dto/reset-password.dto';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private otpService: OtpService,
    private jwt: JwtService,
  ) {}

  removeNullValues(obj: any): { [k: string]: unknown } {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null),
    );
  }

  async requestOtp(phone: string) {
    const existingUser = await this.prisma.user.findFirst({
      where: { phone },
    });
    if (existingUser) {
      throw new BadRequestException(
        'Bu telefon raqami allaqachon ro‘yxatdan o‘tgan',
      );
    }

    return this.otpService.sendOtp(phone);
  }

  async verifyOtp(phone: string, code: string) {
    return this.otpService.verifyOtp(phone, code);
  }

  async register(dto: RegisterDto) {
    // const isVerified = await this.otpService.isPhoneVerified(dto.phone);
    // if (!isVerified) {
    //   throw new BadRequestException('Telefon raqami OTP bilan tasdiqlanmagan');
    // }
    const region = await this.prisma.region.findFirst({
      where: { id: dto.regionId },
    });
    if (!region) {
      throw new BadRequestException('Bunday region mavjud emas');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        fullName: dto.fullName,
        phone: dto.phone,
        password: hashedPassword,
        role: dto.role,
        regionId: dto.regionId,
        Company:
          dto.role === 'USER_YUR' && dto.company
            ? {
                create: dto.company.map((company) => ({
                  name: company.name,
                  inn: company.inn,
                  account: company.account,
                  address: company.address,
                  salary: company.salary, // salary maydoni qo'shildi
                  bank: company.bank,
                  mfo: company.mfo,
                })),
              }
            : undefined,
      },
      include: {
        Company: true,
      },
    });

    this.otpService['otpStore'].delete(dto.phone);

    return { data: user };
  }

  async createAdmin(dto: RegisterAdmin) {
    let admin = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });
    // if (admin) {
    //   throw new ConflictException("Telefon raqam ro'yxatdan o'tilgan");
    // }
    const isVerified = await this.otpService.isPhoneVerified(dto.phone);
    if (!isVerified) {
      throw new BadRequestException('Telefon raqami OTP bilan tasdiqlanmagan');
    }
    const region = await this.prisma.region.findFirst({
      where: { id: dto.regionId },
    });
    if (!region) {
      throw new BadRequestException('Bunday region mavjud emas');
    }

    let hash = await bcrypt.hash(dto.password, 10);
    const newAdmin = await this.prisma.user.create({
      data: {
        ...dto,
        password: hash,
      },
    });

    const cleanUser = this.removeNullValues(newAdmin);

    return { data: cleanUser };
  }

  async login(dto: LoginUser, request: Request) {
    // Foydalanuvchini telefon raqamiga ko'ra qidiramiz
    const user = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });

    // Agar foydalanuvchi topilmasa
    if (!user) {
      throw new NotFoundException('User topilmadi');
    }

    // Parolni tekshirish
    const match = await bcrypt.compare(dto.password, user.password);

    if (!match) {
      throw new BadRequestException('Xato parol');
    }

    // Access token yaratish
    const accessToken = this.jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        role: user.role,
      },
      { expiresIn: '1h' }, // Access tokenning muddati 1 soat
    );

    // Refresh token yaratish
    const refreshToken = this.jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        role: user.role,
      },
      { expiresIn: '7d' }, // Refresh tokenning muddati 7 kun
    );

    // Foydalanuvchi uchun IP va qurilma ma'lumotlarini olish
    const ip = request.ip;
    const device = request.headers['user-agent'];

    // Sessiyani tekshirish va yangilash
    let session = await this.prisma.session.findFirst({
      where: { userId: user.id, ip, device },
    });

    // Agar sessiya topilmasa, yangi sessiya yaratish
    if (!session) {
      session = await this.prisma.session.create({
        data: {
          userId: user.id,
          refreshToken,
          ip,
          device,
          expiresAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 kun
        },
      });
    } else {
      // Agar sessiya mavjud bo'lsa, refresh tokenni yangilash
      session = await this.prisma.session.update({
        where: { id: session.id },
        data: {
          refreshToken,
          updatedAt: new Date(),
        },
      });
    }

    // Tokenlarni qaytarish
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
    regionId?: string;
  }) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'createdAt',
      order = 'desc',
      regionId,
    } = query;

    const skip = (page - 1) * limit;

    const where: any = {};

    // 🔍 Search
    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }

    // 🧩 Filter by regionId
    if (regionId) {
      where.regionId = regionId;
    }

    // 📦 Ma’lumotlarni olish
    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: order },
        include: { Region: true },
      }),
      this.prisma.user.count({ where }),
    ]);

    // ❌ null qiymatlarni olib tashlash
    const cleanedUsers = users.map((user) => {
      const filteredUser: any = {};
      Object.entries(user).forEach(([key, value]) => {
        if (value !== null) {
          filteredUser[key] = value;
        }
      });
      return filteredUser;
    });

    return {
      data: cleanedUsers,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // user.service.ts
  async ResetPassword(dto: ChangePasswordDto, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }

    const isOldPasswordValid = await bcrypt.compare(
      dto.oldPassword,
      user.password,
    );
    if (!isOldPasswordValid) {
      throw new BadRequestException('Eski parol noto‘g‘ri');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return { message: 'Parol muvaffaqiyatli yangilandi' };
  }

  async delete(id: string) {
    let user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new NotFoundException('User topilmadi');
    }
    try {
      let deleteUser = await this.prisma.user.delete({ where: { id } });
      return { data: deleteUser };
    } catch (error) {
      return { message: error.message };
    }
  }

  async me(userId: string) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { id: userId },
        include: {
          Region: true,
        },
      });
      if (!user) {
        throw new NotFoundException('User topilmadi');
      }
      const cleanedUser = this.removeNullValues(user);
      return { data: cleanedUser };
    } catch (error) {
      throw new Error(`Xatolik: ${error.message}`);
    }
  }
}
