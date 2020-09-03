import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataEventModule } from './data-event/data-event.module';


@Module({
  imports: [DataEventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
