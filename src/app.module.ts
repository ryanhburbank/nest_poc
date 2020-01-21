import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  controllers: [AppController],
  imports: [CatsModule],
  providers: [AppService],
})
export class AppModule {}
