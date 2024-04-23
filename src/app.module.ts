import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareersModule } from './careers/careers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CareersModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
