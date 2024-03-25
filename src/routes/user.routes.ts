import { Router } from 'express';
import { UserController } from '../controllers';
import { CreateUser } from '../middlewares/create-user.middleware';
import { Auth } from '../middlewares';
import { ValidateIdFormat } from '../middlewares/validate-id-format.middleware';
import { Login } from '../middlewares/login.middleware';
import { Authorization } from '../middlewares/authorization.middleware';

export function userRoutes() {
  const router = Router();
  const controller = new UserController();
  const createUser = new CreateUser();
  const auth = new Auth();
  const validateIdFormat = new ValidateIdFormat();
  const login = new Login();
  const authorization = new Authorization();

  router.post('/', [createUser.validate], controller.create);
  router.post('/login', [login.validate], controller.login);
  router.get('/', [auth.validate, authorization.list], controller.listAll);
  router.get(
    '/:id',
    [auth.validate, validateIdFormat.validate],
    controller.getById,
  );
  router.put(
    '/:id',
    [
      auth.validate,
      authorization.updateOrDeleteUser,
      validateIdFormat.validate,
    ],
    controller.update,
  );
  router.delete(
    '/:id',
    [
      auth.validate,
      authorization.updateOrDeleteUser,
      validateIdFormat.validate,
    ],
    controller.delete,
  );

  return router;
}
