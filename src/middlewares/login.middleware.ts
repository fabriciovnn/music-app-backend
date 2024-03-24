import { NextFunction, Request, Response } from 'express';

export class Login {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
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

    return next();
  }
}
