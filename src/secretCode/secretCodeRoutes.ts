import { Router } from 'express';
import {
  secretCodeGenerateController,
  secretCodeValidateController,
  secretCodeRegenerateController,
} from './controllers';

const secretCodeRouter: Router = Router();

secretCodeRouter.post('/api/secretCode/generate', secretCodeGenerateController);
secretCodeRouter.post('/api/secretCode/regenerate', secretCodeRegenerateController);
secretCodeRouter.post('/api/secretCode/validate', secretCodeValidateController);

export default secretCodeRouter;
