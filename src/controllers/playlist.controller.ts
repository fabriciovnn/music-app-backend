import { Request, Response } from 'express';
import { PlaylistRepository } from '../repositories/playlist.repository';

export class PlaylistController {
  public async create(req: Request, res: Response) {
    try {
      const { name, genre } = req.body;
      const user = req.authUser;

      const service = new PlaylistRepository();
      const response = await service.create({ name, genre, userId: user.id });

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
      const service = new PlaylistRepository();
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

  public async getById(req: Request, res: Response) {
    try {
      const user = req.authUser;
      const { id } = req.params;

      const service = new PlaylistRepository();
      const response = await service.getById({
        playlistId: id,
        userId: user.id,
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

  public async update(req: Request, res: Response) {
    try {
      const { name, genre } = req.body;
      const { id } = req.params;
      const user = req.authUser;

      const service = new PlaylistRepository();
      const responsePlaylist = await service.getById({
        playlistId: id,
        userId: user.id,
      });

      if (!responsePlaylist.ok) {
        return res.status(responsePlaylist.code).json(responsePlaylist);
      }

      const response = await service.update({ playlistId: id, genre, name });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = req.authUser;

      const service = new PlaylistRepository();
      const responsePlaylist = await service.getById({
        playlistId: id,
        userId: user.id,
      });

      if (!responsePlaylist.ok) {
        return res.status(responsePlaylist.code).json(responsePlaylist);
      }

      const response = await service.delete({ playllistId: id });

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
