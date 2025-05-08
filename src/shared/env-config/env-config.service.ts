import { Injectable } from '@nestjs/common';
import { IEnvConfigService } from './env-config.service.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements IEnvConfigService {
  constructor(private configService: ConfigService) {}
  getAppPort(): number {
    return Number(this.configService.get<number>('PORT'));
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development');
  }
}
