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
import { CapacityModule } from './capacity/capacity.module';
import { BrandModule } from './brand/brand.module';
import { SizeModule } from './size/size.module';
import { LevelModule } from './level/level.module';
import { ToolModule } from './tool/tool.module';
import { UploadController } from './upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MasterModule } from './master/master.module';
import { ProfessionModule } from './profession/profession.module';
import { MasterProfessionModule } from './master-profession/master-profession.module';
import { ProfessionLevelModule } from './profession-level/profession-level.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './order-product/order-product.module';

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
    CapacityModule,
    BrandModule,
    SizeModule,
    LevelModule,
    ToolModule,
    MasterModule,
    ProfessionModule,
    MasterProfessionModule,
    ProfessionLevelModule,
    OrderModule,
    OrderProductModule,
  ],
  controllers: [AppController, UploadController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
