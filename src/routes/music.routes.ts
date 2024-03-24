import { Router } from 'express';

export function musicRoutes() {
  const router = Router();

  router.post('/');
  router.get('/');
  router.get('/:id');

  return router;
}
