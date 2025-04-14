import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { OtpModule } from '../otp/otp.module';

@Module({
  imports: [OtpModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}