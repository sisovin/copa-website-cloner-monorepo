import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StorageService {
  private readonly storagePath = path.join(__dirname, '..', '..', 'storage');

  async saveFile(filename: string, content: string): Promise<void> {
    const filePath = path.join(this.storagePath, filename);
    await fs.promises.writeFile(filePath, content, 'utf8');
  }

  async readFile(filename: string): Promise<string> {
    const filePath = path.join(this.storagePath, filename);
    const content = await fs.promises.readFile(filePath, 'utf8');
    return content;
  }
}
