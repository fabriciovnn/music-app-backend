import { NextFunction, Request, Response } from 'express';

export class CreateMusic {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Faltam campos!',
      });
    }

    if (typeof name !== 'string') {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Campo name deve ser do tipo string!',
      });
    }

    return next();
  }
}
