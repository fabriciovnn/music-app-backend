import { NextFunction, Request, Response } from 'express';

export class CreateUser {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
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

    if (password.length < 5) {
      return res.status(400).json({
        ok: false,
        message: 'Mínima 6 caracteres para senha',
      });
    }

    return next();
  }
}
