import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// root file - This is the main file of my server

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // env
  // global settings

  // start http server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
