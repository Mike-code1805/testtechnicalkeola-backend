import { Router } from 'express';
import { authUserTokenValidation, authUserTokenValidationAndIsAdmin } from '../auth/middlewares';
import {
  createOneOrderController,
  getAllOrdersByUserIdController,
  updateOneOrderController,
  getOneOrderByIdController,
  adminGetAllOrdersByUserIdController,
} from './controllers';

const orderRouter: Router = Router();

orderRouter
  .route('/api/order')
  .post(authUserTokenValidation, createOneOrderController)
  .get(authUserTokenValidation, getAllOrdersByUserIdController);

orderRouter
  .route('/api/admin/order')
  .get(authUserTokenValidationAndIsAdmin, adminGetAllOrdersByUserIdController);

orderRouter
  .route('/api/order/:id')
  .get(authUserTokenValidationAndIsAdmin, getOneOrderByIdController)
  .put(authUserTokenValidationAndIsAdmin, updateOneOrderController);

export default orderRouter;
