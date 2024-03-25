export const authUserPath = {
  post: {
    tags: ['Login'],
    summary: 'Endpoint para gerar o token de autorização do usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            required: ['email', 'password'],
            type: 'object',
            properties: {
              email: {
                type: 'string',
                format: 'email',
                summary: 'E-mail de acesso à aplicação',
                example: 'teste@teste.com',
              },
              password: {
                type: 'string',
                summary: 'Senha de acesso à aplicação',
                example: 'senha123@',
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
              required: ['code', 'ok', 'message', 'data'],
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  format: 'int32',
                  summary: 'Status code conforme padrão REST',
                  example: 200,
                },
                ok: {
                  type: 'boolean',
                  summary: 'Indica se a requisição deu certo ou não',
                  example: true,
                },
                message: {
                  type: 'string',
                  summary: 'Mensagem amigável para mostrar ao usuário',
                  example: 'Login efetuado com sucesso!',
                },
                data: {
                  type: 'object',
                  properties: {
                    token: {
                      type: 'string',
                      format: 'JWT',
                      summary:
                        'Token de autorização gerado a partir dos dados do usuario logado',
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                    },
                    user: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          format: 'uuid',
                          summary: 'ID do usuario logado',
                        },
                        email: {
                          type: 'string',
                          format: 'email',
                          summary: 'E-mail do usuario logado',
                        },
                        name: {
                          type: 'string',
                          summary: 'Name do usuario logado',
                          example: 'João da silva',
                        },
                        role: {
                          type: 'string',
                          summary: 'Role do usuario logado',
                          example: 'user',
                        },
                      },
                      required: ['id', 'email', 'name', 'role'],
                    },
                  },
                  required: ['token', 'user'],
                },
              },
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
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
