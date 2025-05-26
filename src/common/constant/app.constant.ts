import { ConfigService } from '@nestjs/config';
(configService: ConfigService) => ({
  DATABASE_URL: configService.get<string>('DATABASE_URL'),
  ACCESS_TOKEN_SECRET: configService.get<string>('ACCESS_TOKEN_SECRET'),
  ACCESS_TOKEN_EXPIRED: configService.get<string>('ACCESS_TOKEN_EXPIRED'),
  REFRESH_TOKEN_SECRET: configService.get<string>('REFRESH_TOKEN_SECRET'),
  REFRESH_TOKEN_EXPID: configService.get<string>('REFRESH_TOKEN_EXPIRED'),
});

export const REGEX_EMAIL =
  /(?= ^[a-z0-9.]+@[a-z0-9.-]+\a -zA-Z]{2,6}$)(?=^.{1,4 0}$)/i;

console.log({
  DATABASE_URL: process.env.DATABASE_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRED: process.env.ACCESS_TOKEN_EXPIRED,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED: process.env.REFRESH_TOKEN_EXPIRED,
});
