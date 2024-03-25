import { Request, Response } from 'express';
import { MusicRepository } from '../repositories/music.repository';
import { PlaylistRepository } from '../repositories/playlist.repository';

export class MusicController {
  public async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const user = req.authUser;

      const servicePlaylist = new PlaylistRepository();
      const responsePlaylist = await servicePlaylist.getById({
        playlistId: id,
        userId: user.id,
      });

      if (!responsePlaylist.ok) {
        return res.status(responsePlaylist.code).json(responsePlaylist);
      }

      const service = new MusicRepository();
      const response = await service.create({ name, playlistId: id });

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
      const service = new MusicRepository();
      const response = await service.listAll();

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
