import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/decorators/role.decorator';
import { UsersRole } from 'src/Enums/user.role';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UsersRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if (!user) {
      throw new ForbiddenException('Foydalanuvchi maʼlumotlari topilmadi');
    }

    const isAllowed = requiredRoles.includes(user.role);
    if (!isAllowed) {
      throw new ForbiddenException(
        `Sizga bu amalni bajarishga ruxsat yo'q (sizning rolingiz: ${user.role})`,
      );
    }

    return true;
  }
}
