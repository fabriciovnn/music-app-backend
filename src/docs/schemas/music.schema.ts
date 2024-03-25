export const musicSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      summary: 'ID da música',
      example: 'fcf14690-9e08-407b-911c-12354409b9d7',
    },
    playlistId: {
      type: 'string',
      format: 'uuid',
      summary: 'ID da playlist',
      example: 'fcf14690-9e08-407b-911c-12354409b9d7',
    },
    name: {
      type: 'string',
      summary: 'Nome da música',
      example: 'Blood Brothers',
    },
  },
};
