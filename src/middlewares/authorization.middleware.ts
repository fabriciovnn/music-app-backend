import { NextFunction, Request, Response } from 'express';

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
}
