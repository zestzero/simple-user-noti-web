import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';

@Module({
  imports: [],
  controllers: [AppController, ViewController],
  providers: [AppService, ViewService, ConfigService],
})
export class AppModule {}
