import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // validator에 도달하지않음.
    forbidNonWhitelisted : true, // request자체를 막아버림.
    transform: true,
  })) // express의 middleware와 비슷하다.
  await app.listen(3000);
}
bootstrap();
