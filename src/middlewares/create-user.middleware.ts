import { NextFunction, Request, Response } from 'express';
import { RoleTypeEnum } from '../enum/role.enum';

export class CreateUser {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        ok: false,
        message: 'Faltam campos!',
      });
    }

    if (!email.includes('@') || !email.includes('.com')) {
      return res.status(400).json({
        ok: false,
        message: 'E-mail inválido!',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        ok: false,
        message: 'Mínima 6 caracteres para senha',
      });
    }

    if (role !== RoleTypeEnum.admin && role !== RoleTypeEnum.user) {
      return res.status(400).json({
        ok: false,
        message: "Role inválida! Deve ser apenas dos tipos 'user' ou 'admin'",
      });
    }

    return next();
  }
}
