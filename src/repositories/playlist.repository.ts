import { Playlist as PlaylistEntity } from '@prisma/client';
import { Playlist } from '../models';
import { CreatePlaylistDTO } from '../dtos/create-playlist.dto';
import { ResponseDTO } from '../dtos/response.dto';
import repository from '../database/prisma.connection';
import { GetPlaylistByIdDTO } from '../dtos/get-playlist-by-id.dto';

export class PlaylistRepository {
  public async create(data: CreatePlaylistDTO): Promise<ResponseDTO> {
    const newPlaylist = await repository.playlist.create({
      data: {
        userId: data.userId,
        name: data.name,
        genre: data.genre,
      },
    });

    return {
      code: 201,
      ok: true,
      message: 'Playlist cadastrada com sucesso!',
      data: this.mapToModel(newPlaylist),
    };
  }

  public async listAll(user: string | undefined): Promise<ResponseDTO> {
    const playlists = await repository.playlist.findMany({
      where: {
        userId: user,
      },
    });

    if (!playlists.length) {
      return {
        code: 404,
        ok: false,
        message: 'Não foram encontradas playlists',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Playlists listadas com sucesso',
      data: playlists.map((p) => this.mapToModel(p)),
    };
  }

  public async getById(data: GetPlaylistByIdDTO): Promise<ResponseDTO> {
    const playlistFounded = await repository.playlist.findUnique({
      where: {
        id: data.playlistId,
        userId: data.userId,
      },
    });

    if (!playlistFounded) {
      return {
        code: 404,
        ok: false,
        message: 'Playlist não encontrada',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Playlist encontrada com sucesso',
      data: this.mapToModel(playlistFounded),
    };
  }

  private mapToModel(entity: PlaylistEntity): Playlist {
    return new Playlist(entity.id, entity.userId, entity.name, entity.genre);
  }
}
