import { Router } from 'express';
import { Auth } from '../middlewares';
import { PlaylistController } from '../controllers';
import { CreatePlaylist } from '../middlewares/create-playlist.middleware';
import { ValidateIdFormat } from '../middlewares/validate-id-format.middleware';
import { Authorization } from '../middlewares/authorization.middleware';

export function playlistRoutes() {
  const router = Router();
  const auth = new Auth();
  const controller = new PlaylistController();
  const createPlaylist = new CreatePlaylist();
  const validateIdFormat = new ValidateIdFormat();
  const authorization = new Authorization();

  router.post('/', [auth.validate, createPlaylist.validate], controller.create);
  router.get('/', [auth.validate, authorization.list], controller.listAll);
  router.get(
    '/:id',
    [auth.validate, validateIdFormat.validate],
    controller.getById,
  );

  return router;
}
