import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';

import {
  authSignupUserController,
  authLoginUserController,
  authValidateTokenUserController,
  authVerifyEmailController,
} from './controllers';
import { signUpUserSchema, singInUserSchema, authUserTokenValidation } from './middlewares';

const authRouter: Router = Router();

authRouter.route('/api/auth/login').post(bodyRequestValidator(singInUserSchema), authLoginUserController);

authRouter.route('/api/auth/register').post(bodyRequestValidator(signUpUserSchema), authSignupUserController);

authRouter.route('/api/auth/verifyemail').post(authVerifyEmailController);

authRouter.route('/api/auth').get(authUserTokenValidation, authValidateTokenUserController);

export default authRouter;
