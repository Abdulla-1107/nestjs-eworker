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
import { SessionModule } from './session/session.module';
import { CapacityModule } from './capacity/capacity.module';
import { BrandModule } from './brand/brand.module';
import { SizeModule } from './size/size.module';
import { LevelModule } from './level/level.module';
import { ToolModule } from './tool/tool.module';
import { UploadController } from './upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/file',
    }),
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
    SessionModule,
    CapacityModule,
    BrandModule,
    SizeModule,
    LevelModule,
    ToolModule,
  ],
  controllers: [AppController, UploadController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
