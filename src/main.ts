import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from './shared/env-config/env-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    app.get<EnvConfigService>(EnvConfigService).getAppPort(),
    '0.0.0.0',
  );
}
bootstrap();
