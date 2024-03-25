export const userPath = {
  post: {
    tags: ['Users'],
    summary: 'Endpoint para cadastrar um usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                summary: 'Nome do usuário a ser cadastrado',
                example: 'João da Silva',
              },
              email: {
                type: 'string',
                format: 'email',
                summary:
                  'E-mail do usuário que sera utilizado para acessar a aplicação',
                example: 'joao@teste.com',
              },
              password: {
                type: 'string',
                summary:
                  'Password do usuário que será utilizada para acessar a aplicação.',
                example: 'senha123@',
              },
            },
            required: ['name', 'email', 'password'],
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  format: 'int32',
                  summary: 'Status code conforme padrão REST',
                },
                ok: {
                  type: 'boolean',
                  summary: 'Indica se a requisição deu certo ou não',
                  example: true,
                },
                message: {
                  type: 'string',
                  summary: 'Mensagem amigável para mostrar ao usuário',
                  example: 'User cadastrado com sucesso!',
                },
                data: {
                  $ref: '#/schemas/user',
                },
              },
              required: ['code', 'ok', 'message', 'data'],
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
  get: {
    tags: ['Users'],
    summary: 'Endpoint para listar os usuarios cadastrados',
    security: [
      {
        bearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  format: 'int32',
                  summary: 'Status code conforme padrão REST',
                },
                ok: {
                  type: 'boolean',
                  summary: 'Indica se a requisição deu certo ou não',
                  example: true,
                },
                message: {
                  type: 'string',
                  summary: 'Mensagem amigável para mostrar ao usuário',
                  example: 'User listado com sucesso!',
                },
                data: {
                  type: 'array',
                  summary: 'Lista de usuarios cadastrados',
                  items: {
                    $ref: '#/schemas/user',
                  },
                },
              },
              required: ['code', 'ok', 'message', 'data'],
            },
          },
        },
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};

export const usersPathWithId = {
  get: {
    tags: ['Users'],
    summary: 'Endpoint para buscar um usuario por ID',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID do usuario buscado',
        required: true,
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  format: 'int32',
                  summary: 'Status code conforme padrão REST',
                },
                ok: {
                  type: 'boolean',
                  summary: 'Indica se a requisição deu certo ou não',
                  example: true,
                },
                message: {
                  type: 'string',
                  summary: 'Mensagem amigável para mostrar ao usuário',
                  example: 'User listado com sucesso!',
                },
                data: {
                  $ref: '#/schemas/user',
                },
              },
              required: ['code', 'ok', 'message', 'data'],
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
  put: {
    tags: ['Users'],
    summary: 'Endpoint para atualizar os dados de um usuario',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID do usuario',
        required: true,
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                summary: 'Nome do usuario a ser atualizado',
                example: 'João da Silva Pereira',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  format: 'int32',
                  summary: 'Status code conforme padrão REST',
                },
                ok: {
                  type: 'boolean',
                  summary: 'Indica se a requisição deu certo ou não',
                  example: true,
                },
                message: {
                  type: 'string',
                  summary: 'Mensagem amigável para mostrar ao usuário',
                  example: 'Usuario atualizado',
                },
                data: {
                  $ref: '#/schemas/user',
                },
              },
              required: ['code', 'ok', 'message', 'data'],
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
  delete: {
    tags: ['Users'],
    summary: 'Endpoint para deletar um usuario',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID do usuario',
        required: true,
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  format: 'int32',
                  summary: 'Status code conforme padrão REST',
                },
                ok: {
                  type: 'boolean',
                  summary: 'Indica se a requisição deu certo ou não',
                  example: true,
                },
                message: {
                  type: 'string',
                  summary: 'Mensagem amigável para mostrar ao usuário',
                  example: 'Usuario excluido',
                },
                data: {
                  $ref: '#/schemas/user',
                },
              },
              required: ['code', 'ok', 'message', 'data'],
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
