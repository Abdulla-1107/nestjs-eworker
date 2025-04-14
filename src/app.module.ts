import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OtpModule } from './otp/otp.module';
import { ConfigModule } from '@nestjs/config';
import { RegionModule } from './region/region.module';
import { PrismaService } from './prisma/prisma.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 5,
        },
      ],
    }),
    JwtModule.register({
      global: true,
      secret: 'token',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
    RegionModule,
    OtpModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
