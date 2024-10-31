import { Router } from 'express';

import { getAllProductsController } from './controllers';

const productRouter: Router = Router();

productRouter.route('/api/products').get(getAllProductsController);

export default productRouter;
