import { RoleTypeEnum } from '../enum/role.enum';

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}
