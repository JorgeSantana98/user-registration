import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './modules/typeorm/typeorm.service';
@Module({
  imports: [AuthModule, UsersModule,
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
  ],
  controllers: [AppController],
  providers: [AppService, TypeormService],
})
export class AppModule { }
