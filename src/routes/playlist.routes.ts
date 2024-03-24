import { Router } from 'express';

export function playlistRoutes() {
  const router = Router();

  router.post('/');
  router.get('/');
  router.get('/:id');

  return router;
}
