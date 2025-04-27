import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsiteJob } from './entities/website-job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [WebsiteJob],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([WebsiteJob]),
  ],
})
export class DatabaseModule {}
