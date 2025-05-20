import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PermissionCheck } from './modules/auth/permission/permission-check';
import { TokenCheck } from './modules/auth/token/token-check';
import { ValidationPipe } from '@nestjs/common';
import { ResponseSuccessInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Global
  const reflector = app.get(Reflector);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new TokenCheck(reflector));
  app.useGlobalGuards(new PermissionCheck(reflector));
  app.useGlobalInterceptors(new ResponseSuccessInterceptor(reflector));

  // cors
  app.enableCors({
    origin: [
      'http://localhost:5173',
      `https://google.com`,
      'http://localhost:3000',
    ],
  });

  // swagger
  const config = new DocumentBuilder()
    .setTitle('CapsTone AIRBNB')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
