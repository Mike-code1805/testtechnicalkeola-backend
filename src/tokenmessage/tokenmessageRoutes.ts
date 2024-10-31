import { Router } from 'express';
import { tokenmessageCreateController, tokenmessageGetController } from './controllers';
import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';

const tokenmessageRouter: Router = Router();

tokenmessageRouter
  .post('/api/tokenmessage', authUserTokenValidation, tokenmessageCreateController)
  .get('/api/tokenmessage', tokenmessageGetController);

export default tokenmessageRouter;
