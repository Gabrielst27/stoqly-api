import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from './shared/env-config/env-config.service';
import { applyGlobalConfig } from './global-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  applyGlobalConfig(app);
  await app.listen(
    app.get<EnvConfigService>(EnvConfigService).getAppPort(),
    '0.0.0.0',
  );
}
bootstrap();
