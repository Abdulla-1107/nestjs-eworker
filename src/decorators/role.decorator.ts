import { SetMetadata } from '@nestjs/common';
import { UsersRole } from 'src/Enums/user.role';

export const ROLES_KEY = 'roles';
export const Role = (...roles: UsersRole[]) => SetMetadata(ROLES_KEY, roles);
