import repository from '../database/prisma.connection';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { ResponseDTO } from '../dtos/response.dto';
import { User as UserEntity } from '@prisma/client';
import { User } from '../models';
import { RoleTypeEnum } from '../enum/role.enum';
import { LoginDTO } from '../dtos/login.dto';
import { JWTAdapter } from '../adapters';
import { envs } from '../envs';

export class UserRepository {
  public async create(data: CreateUserDTO): Promise<ResponseDTO> {
    const userExist = await repository.user.findUnique({
      where: { email: data.email },
    });

    if (userExist) {
      return {
        code: 400,
        ok: false,
        message: 'E-mail já cadastrado',
      };
    }

    const userDB = await repository.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        role: data.role,
      },
    });

    return {
      code: 201,
      ok: true,
      message: 'Usuário cadastrado!',
      data: this.mapToModel(userDB).toJSON(),
    };
  }

  public async login(data: LoginDTO): Promise<ResponseDTO> {
    const userFounded = await repository.user.findUnique({
      where: {
        email: data.email,
        password: data.password,
      },
    });

    if (!userFounded) {
      return {
        code: 401,
        ok: false,
        message: 'Credenciais inválidas',
      };
    }

    const userModel = this.mapToModel(userFounded);

    const jwt = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
    const token = jwt.generateToken(userModel.toJSON());

    return {
      code: 200,
      ok: true,
      message: 'Login efetuado',
      data: { user: userModel.toJSON(), token },
    };
  }

  public async getById(id: string): Promise<ResponseDTO> {
    const userDB = await repository.user.findUnique({
      where: { id },
    });

    if (!userDB) {
      return {
        code: 404,
        ok: false,
        message: 'Usuário não encontrado',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Usuário encontrado',
      data: this.mapToModel(userDB).toJSON(),
    };
  }

  public async listAll(): Promise<ResponseDTO> {
    const usersDB = await repository.user.findMany({
      orderBy: { name: 'desc' },
    });

    if (!usersDB.length) {
      return {
        code: 404,
        ok: false,
        message: 'Não foram encontrados usuários cadastrados no sistema.',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Usuários listados com sucesso',
      data: usersDB.map((u) => this.mapToModel(u).toJSON()),
    };
  }

  private mapToModel(entity: UserEntity): User {
    return new User(
      entity.id,
      entity.name,
      entity.email,
      entity.password,
      RoleTypeEnum[entity.role],
    );
  }
}