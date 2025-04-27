import { DataSource } from 'typeorm';
import { WebsiteJob } from './entities/website-job.entity';

export const DatabaseProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [WebsiteJob],
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
