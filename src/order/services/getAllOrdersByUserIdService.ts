import { logger } from '../../logger/appLoger';
import { orderModel } from '../entity/model/orderModel';
import { Order } from '../entity/types/Order';

export const getAllOrdersByUserIdService = async (userId: string): Promise<Order[]> => {
  try {
    const orders = await orderModel.find({ userId }, 'id userId userOrderNumber items totalAmount status');
    return orders as Order[];
  } catch (error: any) {
    logger.error('Error fetching orders by user ID', {
      instance: 'services',
      service: 'getAllOrdersByUserIdService',
      trace: error.message ? error.message : '',
    });
    throw new Error(error.message ? error.message : 'Error fetching orders by user ID.');
  }
};
