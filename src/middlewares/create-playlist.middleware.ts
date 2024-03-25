import { NextFunction, Request, Response } from 'express';

export class CreatePlaylist {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { name, genre } = req.body;

    if (!name || !genre) {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Faltam campos!',
      });
    }

    if (typeof name !== 'string' || typeof genre !== 'string') {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Campos inválidos! name e genre devem ser do tipo string',
      });
    }

    return next();
  }
}
