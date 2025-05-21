import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { RoomModule } from './modules/room/room.module';
import { ConfigModule } from '@nestjs/config';
import { CommentsModule } from './modules/comments/comments.module';
import PrismaModule from './modules/prisma/prisma.module';
import { CheckTokenStrategy } from './modules/auth/token/token-strategy';
import { UserModule } from './modules/user/user.module';
import { LocationModule } from './modules/location/location.module';
import { BookingModule } from './modules/booking/booking.module';
import { CheckPermissionStrategy } from './modules/auth/permission/permission-strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
      expandVariables: true,
    }),
    AuthModule,
    RoomModule,
    CommentsModule,
    PrismaModule,
    UserModule,
    LocationModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService, CheckTokenStrategy, CheckPermissionStrategy],
})
export class AppModule {}
