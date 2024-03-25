import { NextFunction, Request, Response } from 'express';
import { PlaylistRepository } from '../repositories/playlist.repository';

export class Authorization {
  public list(req: Request, res: Response, next: NextFunction) {
    const { role, id } = req.authUser;

    if (role === 'user') {
      req.query = {
        user: id,
      };
    }

    return next();
  }

  public updateOrDeleteUser(req: Request, res: Response, next: NextFunction) {
    const user = req.authUser;

    if (user.role !== 'admin') {
      return res.status(403).json({
        code: 403,
        ok: false,
        message: 'Você não está autorizado a atualizar ou deletar um usuário',
      });
    }

    return next();
  }
}
