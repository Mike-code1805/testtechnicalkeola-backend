import { Router } from 'express';
import { globalCreateController, globalGetController } from './controllers';

const globalRouter: Router = Router();

globalRouter.post('/api/global', globalCreateController).get('/api/global', globalGetController);

export default globalRouter;
