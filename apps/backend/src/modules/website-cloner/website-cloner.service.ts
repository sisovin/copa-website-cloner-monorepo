import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebsiteJob } from '../../database/entities/website-job.entity';

@Injectable()
export class WebsiteClonerService {
  constructor(
    @InjectRepository(WebsiteJob)
    private readonly websiteJobRepository: Repository<WebsiteJob>,
  ) {}

  async cloneWebsite(url: string): Promise<string> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const content = await page.content();
    await browser.close();
    return content;
  }

  async getJobStatus(id: number): Promise<WebsiteJob> {
    return this.websiteJobRepository.findOne(id);
  }
}
