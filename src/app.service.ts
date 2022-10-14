import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DatabaseConfig } from './config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getHello() {
    return this.config.get<DatabaseConfig>('database');
  }
}
