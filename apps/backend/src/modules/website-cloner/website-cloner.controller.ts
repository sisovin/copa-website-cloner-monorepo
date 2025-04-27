import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { WebsiteClonerService } from './website-cloner.service';
import { WebsiteJobResponseDto } from '../../dto/website-job-response.dto';

@Controller('website-cloner')
export class WebsiteClonerController {
  constructor(private readonly websiteClonerService: WebsiteClonerService) {}

  @Post('clone')
  async cloneWebsite(@Body('url') url: string): Promise<string> {
    return this.websiteClonerService.cloneWebsite(url);
  }

  @Get('status/:id')
  async getJobStatus(@Param('id') id: number): Promise<WebsiteJobResponseDto> {
    return this.websiteClonerService.getJobStatus(id);
  }
}
