import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team.module';
import { DispatcherModule } from './modules/dispatcher.module';

@Module({

  imports: [TeamModule, DispatcherModule],
  controllers:[],
  providers: [],
})
export class AppModule {}