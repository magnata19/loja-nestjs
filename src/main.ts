import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //it indicates we're going to transform the data from json to the object we're going to use on the controller with @Body()
      whitelist: true, //we're goin' to create a user just with the fields we setted.
      forbidNonWhitelisted: true, //we're going to throw a new error if there's an invalid field that doesn't exist on our dto.
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
