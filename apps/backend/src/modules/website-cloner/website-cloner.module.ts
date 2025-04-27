import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsiteClonerService } from './website-cloner.service';
import { WebsiteClonerController } from './website-cloner.controller';
import { WebsiteJob } from '../../database/entities/website-job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WebsiteJob])],
  controllers: [WebsiteClonerController],
  providers: [WebsiteClonerService],
  exports: [WebsiteClonerService],
})
export class WebsiteClonerModule {}
