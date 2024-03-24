import { NextFunction, Request, Response } from 'express';

export class ValidateIdFormat {
  public async validate(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (id.length !== 36) {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Formato do ID inválido',
      });
    }

    return next();
  }
}
