import { Router } from 'express';
import { Auth } from '../middlewares';
import { MusicController } from '../controllers';
import { ValidateIdFormat } from '../middlewares/validate-id-format.middleware';

export function musicRoutes() {
  const router = Router();
  const auth = new Auth();
  const controller = new MusicController();
  const validateIdFormat = new ValidateIdFormat();

  router.post(
    '/playlist/:id',
    [auth.validate, validateIdFormat.validate],
    controller.create,
  );
  router.get('/', [auth.validate], controller.listAll);

  return router;
}
