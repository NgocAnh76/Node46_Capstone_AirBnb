import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ACCESS_TOKEN_SECRET } from 'src/common/constant/app.constant';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CheckPermissionStrategy extends PassportStrategy(
  Strategy,
  'check-permission',
) {
  constructor(public prisma: PrismaService) {
    super();
  }

  async validate(req: any) {
    console.log(`PERMISSION- VALIDATE`);
    console.log({ req });

    const user = req.user;

    const role_id = user.role_id;
    const endpoint = req.route.path;
    const method = req.method;

    if (role_id === 1) return true;

    console.log({
      role_id,
      endpoint,
      method,
    });

    // Đi tìm id của permission thông qua fullPath, method
    const permission = await this.prisma.permissions.findFirst({
      where: {
        endpoint,
        method,
      },
    });
    if (!permission) {
      throw new BadRequestException(
        `You do not have sufficient permission to use this resource (API).`,
      );
    }

    const role_permission = await this.prisma.role_permissions.findFirst({
      where: {
        role_permission_id: permission.permission_id,
        role_id: role_id,
        is_active: true,
      },
    });

    if (!role_permission)
      throw new BadRequestException(
        `You do not have sufficient permission to use this resource (API).`,
      );

    return true;
  }
}
