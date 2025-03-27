import {
  BadGatewayException,
  BadRequestException,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/common/decorators/is-public.decorator';
import { SKIP_PERMISSION } from 'src/common/decorators/skip-permission.decorator';

@Injectable()
export class PermissionCheck extends AuthGuard('check-permission') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    console.log(`PERMISSION-CAN_ACTIVE`);
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const skipPermission = this.reflector.getAllAndOverride<boolean>(
      SKIP_PERMISSION,
      [context.getHandler(), context.getClass()],
    );
    if (skipPermission) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log(`TOKEN-HANDLE_REQUEST`);
    if (err || !user) {
      throw err || new BadGatewayException(err?.message);
    }
    return user;
  }
}
