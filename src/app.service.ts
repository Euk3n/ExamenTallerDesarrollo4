import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getViewName(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
  
    const projectDir = path.resolve(__dirname, '..');

    const content = fs.readFileSync(path.join(projectDir, 'src/index.html'), 'utf8');
    return content;
  }
}