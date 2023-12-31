import { Module } from '@nestjs/common';
import { DatabaseModule } from '../providers/database/database.module';
import { dispatcherProviders } from '../repositories/dispatcher.repository';
import { DispatcherService } from '../services/dispatcher.service';
import { DispatcherController } from '../controlers/dispatcher.controler';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...dispatcherProviders,
    DispatcherService,
  ],
  controllers: [DispatcherController],
  exports: [DispatcherService],
})
export class DispatcherModule {}