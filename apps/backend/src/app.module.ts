import { Module } from '@nestjs/common';
import { WebsiteClonerModule } from './modules/website-cloner/website-cloner.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [WebsiteClonerModule, DatabaseModule],
})
export class AppModule {}
