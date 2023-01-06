import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false }); //Throw an error instead of returning an exit code 1
  await app.listen(3000);
}
bootstrap();
