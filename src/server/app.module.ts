import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConfigService } from './service/api.service';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ViewController],
  providers: [AppService, ViewService, ConfigService, ApiConfigService],
})
export class AppModule {}
