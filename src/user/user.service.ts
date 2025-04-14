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
import { RegisterUserFiz } from './dto/register-user.fiz.dto';
import { RegisterUserYur } from './dto/register-user.yur.dto';
import { RegisterAdmin } from './dto/register-admin.dto';
import { LoginUser } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserFizDto } from './dto/update-user.fiz.dto';

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

  async createFizUser(dto: RegisterUserFiz) {
    // Telefon raqami tasdiqlanganligini tekshirish
    const isVerified = await this.otpService.isPhoneVerified(dto.phone);
    if (!isVerified) {
      throw new BadRequestException('Telefon raqami OTP bilan tasdiqlanmagan');
    }

    // Mavjud foydalanuvchi tekshiruvi
    const existingUser = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });
    // if (existingUser) {
    //   throw new BadRequestException(
    //     'Bu telefon raqami allaqachon ro‘yxatdan o‘tgan',
    //   );
    // }

    // Region tekshiruvi
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
        regionId: dto.regionId,
        role: 'USER_FIZ',
      },
    });

    this.otpService['otpStore'].delete(dto.phone);

    const cleanUser = this.removeNullValues(user);
    return { data: cleanUser };
  }

  async createYurUser(dto: RegisterUserYur) {
    const existingUser = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });
    // if (existingUser) {
    //   throw new BadRequestException(
    //     'Bu telefon raqami allaqachon ro‘yxatdan o‘tgan',
    //   );
    // }

    // Telefon raqami tasdiqlanganligini tekshirish
    const isVerified = await this.otpService.isPhoneVerified(dto.phone);
    if (!isVerified) {
      throw new BadRequestException('Telefon raqami OTP bilan tasdiqlanmagan');
    }

    // Region tekshiruvi
    const region = await this.prisma.region.findFirst({
      where: { id: dto.regionId },
    });
    if (!region) {
      throw new BadRequestException('Bunday region mavjud emas');
    }

    // Mavjud foydalanuvchi tekshiruvi

    // Parolni shifrlash
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Foydalanuvchi yaratish
    const user = await this.prisma.user.create({
      data: {
        fullName: dto.fullName,
        phone: dto.phone,
        password: hashedPassword,
        regionId: dto.regionId,
        inn: dto.inn,
        bank: dto.bank,
        mfo: dto.mfo,
        salary: dto.salary,
        account: dto.account,
        address: dto.address,
        role: 'USER_YUR',
      },
    });

    // Foydalanuvchi yaratilgandan so‘ng tasdiqlash holatini o‘chirish
    this.otpService['otpStore'].delete(dto.phone); // To‘g‘ridan-to‘g‘ri o‘chirish (ideal emas, lekin soddalashtirish uchun)

    const cleanUser = this.removeNullValues(user);

    return { data: cleanUser };
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

  async login(dto: LoginUser) {
    let user = await this.prisma.user.findFirst({
      where: { phone: dto.phone },
    });
    if (!user) {
      throw new NotFoundException('User topilmadi');
    }
    console.log(user);
    
    let match = await bcrypt.compare(dto.password, user.password);
    if (!match) {
      throw new NotFoundException('Xato parol');
    }
    let token = this.jwt.sign({
      id: user.id,
      phone: user.phone,
      role: user.role,
    });
    return {
      token,
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

  async updateUserFiz(userId: string, dto: UpdateUserFizDto) {
    try {
      let user = await this.prisma.user.findFirst({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException('Foydalanuvchi topilmadi');
      }
      const allowedRoles = ['USER_FIZ', 'ADMIN'];
      if (!allowedRoles.includes(user.role)) {
        throw new ForbiddenException('Sizga bu amalni bajarishga ruxsat yo‘q');
      }
      if (dto.regionId) {
        const region = await this.prisma.region.findFirst({
          where: { id: dto.regionId },
        });
        if (!region) {
          throw new NotFoundException('Region topilmadi');
        }
      }

      if (dto.password) {
        dto.password = await bcrypt.hash(dto.password, 10);
      }

      const updatedUser = await this.prisma.user.update({
        where: { id: userId },
        data: dto,
      });

      const cleanUser = this.removeNullValues(updatedUser);

      return { data: cleanUser };

    } catch (error) {
      throw new Error(`Foydalanuvchini yangilashda xatolik: ${error.message}`);
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
