import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team.module';
import { DispatcherModule } from './modules/dispatcher.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { AuthGuard } from './auth/auth.guard';
import { StatusService } from './services/transitions.service';
import { EventsModule } from './events/events.module';

@Module({

  imports: [
    TeamModule,
    AuthModule,
    DispatcherModule,
    EventsModule,
  ],
  controllers:[],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}