import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team.module';

@Module({

  imports: [TeamModule],
  controllers:[],
  providers: [],
})
export class AppModule {}
