import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  UseGuards,
  Patch,
  Req,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { RegisterAdmin } from './dto/register-admin.dto';
import { LoginUser } from './dto/login-user.dto';
import { Role } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/auth-guard/role.guard';
import { AuthGuard } from 'src/auth-guard/auth.guard';
import { Roles, UsersRole } from 'src/Enums/user.role';
import { RegisterDto } from './dto/register-user.dto';
import { Request } from 'express';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Barcha foydalanuvchilarni olish' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'regionId', required: false, type: String })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiQuery({ name: 'order', required: false, enum: ['asc', 'desc'] })
  findAll(@Query() query: any) {
    return this.userService.findAll(query);
  }

  @Post('request-otp')
  @ApiOperation({ summary: 'Telefon raqamiga OTP yuborish' })
  @ApiResponse({ status: 200, description: 'OTP yuborildi' })
  @ApiResponse({
    status: 400,
    description:
      'Noto‘g‘ri telefon raqami yoki raqam allaqachon ro‘yxatdan o‘tgan',
  })
  async requestOtp(@Body() requestOtpDto: RequestOtpDto) {
    return this.userService.requestOtp(requestOtpDto.phone);
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'OTP-ni tasdiqlash' })
  @ApiResponse({ status: 200, description: 'OTP tasdiqlandi' })
  @ApiResponse({
    status: 400,
    description: 'Noto‘g‘ri OTP kodi yoki muddati tugagan',
  })
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.userService.verifyOtp(verifyOtpDto.phone, verifyOtpDto.code);
  }

  @Post('register')
  @ApiOperation({ summary: 'Foydalanuvchini ro‘yxatdan o‘tkazish' })
  @ApiResponse({
    status: 201,
    description: 'Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi',
  })
  async register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto);
  }

  @Role(UsersRole.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Post('register/admin')
  @ApiOperation({ summary: 'Admin ro‘yxatdan o‘tkazish' })
  @ApiResponse({
    status: 201,
    description: 'Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi',
  })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma‘lumotlar' })
  async registerAdmin(@Body() dto: RegisterAdmin) {
    return this.userService.createAdmin(dto);
  }
  @Post('/login')
  @ApiOperation({ summary: 'User tizimga kirish' })
  @ApiResponse({
    status: 201,
    description: 'Foydalanuvchi muvaffaqiyatli tizimdan o‘tdi',
  })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma‘lumotlar' })
  async loginUser(@Body() dto: LoginUser, @Req() request: Request) {
    return this.userService.login(dto, request);
  }

  @ApiOperation({ summary: 'Reset password' })
  @UseGuards(AuthGuard)
  @Post('/reset-password')
  resetPassword(@Req() req: Request) {
    const userId = req['user'].id;
    return this.userService.me(userId);
  }

  @Role(UsersRole.ADMIN, UsersRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Foydalanuvchini ID bo‘yicha o‘chirish' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @ApiOperation({ summary: "User barcha ma'lumotlarni olish" })
  @UseGuards(AuthGuard)
  @Get('/me')
  async me(@Req() req: Request) {
    const userId = req['user'].id;
    return this.userService.me(userId);
  }
}
