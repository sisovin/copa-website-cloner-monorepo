import { Module } from '@nestjs/common';
import { WebsiteClonerService } from './website-cloner.service';
import { WebsiteClonerController } from './website-cloner.controller';

@Module({
  imports: [],
  controllers: [WebsiteClonerController],
  providers: [WebsiteClonerService],
  exports: [WebsiteClonerService],
})
export class WebsiteClonerModule {}
