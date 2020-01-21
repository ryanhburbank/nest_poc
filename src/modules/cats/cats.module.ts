import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats.controllers';
import { CatsService } from './services/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
