import { ConfigService } from '@nestjs/config';

// app
// export const DATABASE_URL = process.env.DATABASE_URL;

// export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
// export const ACCESS_TOKEN_EXPIRED = process.env.ACCESS_TOKEN_EXPIRED;

// export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
// export const REFRESH_TOKEN_EXPIRED = process.env.REFRESH_TOKEN_EXPIRED;

// Server
export const getEnvVariables = (configService: ConfigService) => ({
  DATABASE_URL: configService.get<string>('DATABASE_URL'),
  ACCESS_TOKEN_SECRET: configService.get<string>('ACCESS_TOKEN_SECRET'),
  ACCESS_TOKEN_EXPIRED: configService.get<string>('ACCESS_TOKEN_EXPIRED'),
  REFRESH_TOKEN_SECRET: configService.get<string>('REFRESH_TOKEN_SECRET'),
  REFRESH_TOKEN_EXPIRED: configService.get<string>('REFRESH_TOKEN_EXPIRED'),
});

export const REGEX_EMAIL =
  /(?=^[a-z0-9.]+@[a-z0-9.-]+\.[a-zA-Z]{2,6}$)(?=^.{1,40}$)/i;

console.log({
  DATABASE_URL: process.env.DATABASE_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRED: process.env.ACCESS_TOKEN_EXPIRED,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED: process.env.REFRESH_TOKEN_EXPIRED,
});
