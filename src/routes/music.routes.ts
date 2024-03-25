import { Router } from 'express';
import { Auth } from '../middlewares';
import { MusicController } from '../controllers';
import { ValidateIdFormat } from '../middlewares/validate-id-format.middleware';
import { CreateMusic } from '../middlewares/create-music.middleware';

export function musicRoutes() {
  const router = Router();
  const auth = new Auth();
  const controller = new MusicController();
  const validateIdFormat = new ValidateIdFormat();
  const createMusic = new CreateMusic();

  router.post(
    '/playlist/:id',
    [auth.validate, validateIdFormat.validate, createMusic.validate],
    controller.create,
  );
  router.get('/', [auth.validate], controller.listAll);

  return router;
}
