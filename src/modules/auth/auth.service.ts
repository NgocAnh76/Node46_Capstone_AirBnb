import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { omit } from 'lodash';
import { JwtService } from '@nestjs/jwt';
import {
  ACCESS_TOKEN_EXPIRED,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED,
  REFRESH_TOKEN_SECRET,
} from 'src/common/constant/app.constant';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    public prisma: PrismaService,
    public jwt: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const { email, pass_word, full_name } = createAuthDto;
    console.log({ email, pass_word, full_name });

    const userExist = await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (userExist)
      throw new BadRequestException('Account already exists please login');

    const passHash = await bcrypt.hash(pass_word, 10);

    const userNew = await this.prisma.users.create({
      data: {
        ...createAuthDto,
        pass_word: passHash,
      },
    });

    return omit(userNew, ['pass_word']);
  }
  async login(loginAuthDto: LoginAuthDto) {
    const { email, pass_word } = loginAuthDto;

    const userExist = await this.prisma.users.findFirst({
      where: { email },
    });
    if (!userExist)
      throw new BadRequestException('Account does not exist, please register');

    if (!userExist.pass_word) {
      if (userExist.face_app_id) {
        throw new BadRequestException(
          `Please login with facebook, to create a new password`,
        );
      }
      if (userExist.google_id) {
        throw new BadRequestException(
          `Please login with google, to create a new password`,
        );
      }
      throw new BadRequestException(`Invalid, please contact customer service`);
    }
    const isPassword = bcrypt.compareSync(pass_word, userExist.pass_word);
    if (!isPassword)
      throw new BadRequestException('Password is incorrect, please re-enter');

    const token = await this.createToken(userExist.user_id);

    return {
      user: omit(userExist, ['pass_word']),
      token,
    };
  }
  async refreshToken(refreshTokenDto: RefreshTokenDto) {
    const { id, refreshToken } = refreshTokenDto;
    const user = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!user || user.refresh_token !== refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return this.createToken(id);
  }

  async createToken(userId: number) {
    if (!userId)
      throw new BadRequestException(
        'No userID to generate token, please provide userID',
      );

    const accessToken = this.jwt.sign(
      { userId: userId },
      {
        expiresIn: ACCESS_TOKEN_EXPIRED,
        secret: ACCESS_TOKEN_SECRET,
      },
    );
    const refreshToken = this.jwt.sign(
      { userId: userId },
      {
        expiresIn: REFRESH_TOKEN_EXPIRED,
        secret: REFRESH_TOKEN_SECRET,
      },
    );
    try {
      await this.prisma.users.update({
        where: { user_id: userId },
        data: { refresh_token: refreshToken },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update refresh token');
    }
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
