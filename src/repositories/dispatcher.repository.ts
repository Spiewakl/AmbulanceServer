import { DataSource } from 'typeorm';
import { Dispatcher } from '../entities/dispatcher.entity';

export const dispatcherProviders = [
  {
    provide: 'DISPATCHER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dispatcher),
    inject: ['DATA_SOURCE'],
  }
];