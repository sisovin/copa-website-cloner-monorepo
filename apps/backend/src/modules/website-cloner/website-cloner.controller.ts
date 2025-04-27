import { Controller, Post, Body } from '@nestjs/common';
import { WebsiteClonerService } from './website-cloner.service';

@Controller('website-cloner')
export class WebsiteClonerController {
  constructor(private readonly websiteClonerService: WebsiteClonerService) {}

  @Post('clone')
  async cloneWebsite(@Body('url') url: string): Promise<string> {
    return this.websiteClonerService.cloneWebsite(url);
  }
}
