import { Router } from 'express';
import { UserController } from '../controllers';
import { CreateUser } from '../middlewares/create-user.middleware';
import { Auth } from '../middlewares';
import { ValidateIdFormat } from '../middlewares/validate-id-format.middleware';
import { Login } from '../middlewares/login.middleware';

export function userRoutes() {
  const router = Router();
  const controller = new UserController();
  const createUser = new CreateUser();
  const auth = new Auth();
  const validateIdFormat = new ValidateIdFormat();
  const login = new Login();

  router.post('/', [createUser.validate], controller.create);
  router.post('/login', [login.validate], controller.login);
  router.get('/', [auth.validate], controller.listAll);
  router.get(
    '/:id',
    [auth.validate, validateIdFormat.validate],
    controller.getById,
  );

  return router;
}
