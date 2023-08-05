import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team.module';
import { DispatcherModule } from './modules/dispatcher.module';
import { AuthModule } from './auth/auth.module';

@Module({

  imports: [
    TeamModule,
    AuthModule,
    DispatcherModule,
  ],
  controllers:[],
  providers: [],
})
export class AppModule {}