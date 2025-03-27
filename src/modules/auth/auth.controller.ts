import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Public } from 'src/common/decorators/is-public.decorator';
import { ResponseSuccess } from 'src/common/decorators/response.success.decorator';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
@Public()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ResponseSuccess(`Register successfully`)
  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  @ResponseSuccess(`Login successfully`)
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @ResponseSuccess(`Refresh token successfully`)
  @Post('refresh-token')
  refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshToken(refreshTokenDto);
  }
}
