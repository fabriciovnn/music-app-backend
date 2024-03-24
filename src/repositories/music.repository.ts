import repository from '../database/prisma.connection';
import { CreateMusicDTO } from '../dtos/create-music.dto';
import { ResponseDTO } from '../dtos/response.dto';
import { Music } from '../models';
import { Music as MusicEntity } from '@prisma/client';

export class MusicRepository {
  public async create(data: CreateMusicDTO): Promise<ResponseDTO> {
    const newMusic = await repository.music.create({
      data: {
        name: data.name,
        playlistId: data.playlistId,
      },
    });

    return {
      code: 201,
      ok: true,
      message: 'Musica cadastrada com sucesso!',
      data: this.mapToModel(newMusic),
    };
  }

  public async listAll(): Promise<ResponseDTO> {
    const musics = await repository.music.findMany();

    if (!musics.length) {
      return {
        code: 404,
        ok: false,
        message: 'Não foram encontradas musicas.',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Musicas listadas com sucesso',
      data: musics.map((m) => this.mapToModel(m)),
    };
  }

  private mapToModel(entity: MusicEntity): Music {
    return new Music(entity.id, entity.playlistId, entity.name);
  }
}
