import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repository';

export class UserController {
  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const service = new UserRepository();

      const response = await service.create({
        name,
        email,
        password,
      });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const service = new UserRepository();

      const response = await service.getById(id);

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const { user } = req.query;
      const service = new UserRepository();
      const response = await service.listAll(user as string | undefined);

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const service = new UserRepository();

      const response = await service.login({ email, password });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }
}
