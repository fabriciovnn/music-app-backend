import cors from 'cors';
import express from 'express';
import { musicRoutes, playlistRoutes, userRoutes } from './routes';
import { serve, setup } from 'swagger-ui-express';

export function createServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use('/users', userRoutes());
  app.use('/playlists', playlistRoutes());
  app.use('/musics', musicRoutes());
  // app.use("/docs", serve, setup(docs));
  app.get('/', (_, res) => res.status(200).json({ ok: true }));

  return app;
}
