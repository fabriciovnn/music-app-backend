export const playlistSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      summary: 'ID da playlist',
      example: 'fcf14690-9e08-407b-911c-12354409b9d7',
    },
    userId: {
      type: 'string',
      format: 'uuid',
      summary: 'ID do usuario',
      example: 'fcf14690-9e08-407b-911c-12354409b9d7',
    },
    name: {
      type: 'string',
      summary: 'Nome da playlist',
      example: 'Rock Brasileiro',
    },
    genre: {
      type: 'string',
      summary: 'Gênero da playlist',
      example: 'Rock',
    },
  },
};
