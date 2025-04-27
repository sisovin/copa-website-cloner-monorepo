import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
  async launchBrowser(): Promise<puppeteer.Browser> {
    return await puppeteer.launch();
  }

  async closeBrowser(browser: puppeteer.Browser): Promise<void> {
    await browser.close();
  }
}
