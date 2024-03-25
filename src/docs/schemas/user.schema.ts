export const userSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
      summary: 'ID do usuario',
      example: 'fcf14690-9e08-407b-911c-12354409b9d7',
    },
    name: {
      type: 'string',
      summary: 'Nome do usuário',
      example: 'João da Silva',
    },
    email: {
      type: 'string',
      format: 'email',
      summary: 'E-mail do usuário',
      example: 'joao@teste.com',
    },
    role: {
      type: 'string',
      summary: 'Role do usuário',
      example: 'user',
    },
  },
};
