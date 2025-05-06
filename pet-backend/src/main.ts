import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe())

  app.enableCors()

  await app.listen(configService.get<number>('PORT') ?? 3000)

  //app.enableCors({
    //origin: 'http://localhost:3001', });

  //await app.listen(3000);
}
bootstrap();