import { Router } from 'express';

export function userRoutes() {
  const router = Router();

  router.post('/');
  router.post('/login');
  router.get('/');
  router.get('/:id');

  return router;
}
