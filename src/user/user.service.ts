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
    // const existingUser = await this.prisma.user.findFirst({
    //   where: { phone },
    // });
    // if (existingUser) {
    //   throw new BadRequestException(
    //     'Bu telefon raqami allaqachon ro‘yxatdan o‘tgan',
    //   );
    // }

    return this.otpService.sendOtp(phone);
  }

  async verifyOtp(phone: string, code: string) {
    return this.otpService.verifyOtp(phone, code);
  }

  async register(dto: RegisterDto) {
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
    const user = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });

    if (!user) {
      throw new NotFoundException('User topilmadi');
    }

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) {
      throw new BadRequestException('Xato parol');
    }

    const accessToken = this.jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        role: user.role,
      },
      { expiresIn: '1h' },
    );

    const refreshToken = this.jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        role: user.role,
      },
      { expiresIn: '7d' },
    );

    const ip = request.ip;
    const device = request.headers['user-agent'];

    let session = await this.prisma.session.findFirst({
      where: { userId: user.id, ip, device },
    });

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
      session = await this.prisma.session.update({
        where: { id: session.id },
        data: {
          refreshToken,
          updatedAt: new Date(),
          expiresAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    }

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
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search, sortBy = 'createdAt', order = 'desc', regionId } = query;

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
    // Step 1: Find user by phone number
    const user = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });

    if (!user) {
      throw new Error('Telefon raqam topilmadi');
    }

    // Step 2: Hash the new password
    const hashedPassword = await bcrypt.hashPassword(dto.newPassword);

    // Step 3: Update the user’s password
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }, // Update the password
    });

    return { message: 'Parol yangilandi' };
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

  async getSessions(userId: string) {
    const sessions = await this.prisma.session.findMany({
      where: { userId: userId },
    });

    if (!sessions || sessions.length == 0) {
      throw new NotFoundException('Sessiyalar topilmadi');
    }

    return { sessions };
  }

  async deleteSession(sessionId: string, userId: string) {
    const session = await this.prisma.session.findFirst({
      where: {
        id: sessionId,
        userId: userId,
      },
    });

    if (!session) {
      throw new NotFoundException('Sessiya topilmadi');
    }

    // Sessiyani o'chiramiz
    await this.prisma.session.delete({
      where: {
        id: session.id,
      },
    });

    return { message: "Sessiya o'chirildi" };
  }
}
