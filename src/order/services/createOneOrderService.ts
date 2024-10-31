import { logger } from '../../logger/appLoger';
import { orderModel } from '../entity/model/orderModel';
import { CreateOrder, Order } from '../entity/types/Order';

export const createOneOrderService = async (orderRequest: CreateOrder): Promise<Order> => {
  try {
    const orderBody = new orderModel(orderRequest);
    const order = await orderBody.save();
    return order as Order;
  } catch (error: any) {
    logger.error('error creating a order service', {
      instance: 'services',
      service: 'createOneOrderService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a order ${error.message}`);
  }
};
