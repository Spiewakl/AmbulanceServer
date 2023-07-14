import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './repositories/team.module';

@Module({

  imports: [TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
