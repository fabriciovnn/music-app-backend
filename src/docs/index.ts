import {
  badRequest,
  notFound,
  securitySchemes,
  serverError,
  unauthorized,
} from './components';
import { authUserPath, userPath, usersPathWithId } from './paths';

import { error, userSchema } from './schemas';

const docs = {
  openapi: '3.0.0',
  info: {
    title: 'MUSIC API',
    description: 'Endpoins do Projeto MUSIC API',
    version: '1.0.0',
    contact: {
      email: 'fbrcvnn@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:8081',
    },
  ],
  paths: {
    '/users': userPath,
    '/users/login': authUserPath,
    '/users/{id}': usersPathWithId,
    '/playlists': {},
    '/musics/playlist': {},
  },
  components: {
    badRequest: badRequest,
    notFound: notFound,
    unauthorized: unauthorized,
    serverError: serverError,
    securitySchemes: securitySchemes,
  },
  schemas: {
    error: error,
    user: userSchema,
  },
};

export default docs;
