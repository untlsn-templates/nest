import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm/orm.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
