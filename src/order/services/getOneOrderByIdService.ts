import { Order } from '../entity/types/Order';
import { logger } from '../../logger/appLoger';
import { orderModel } from '../entity/model/orderModel';

export const getOneOrderByIdService = async (id: string): Promise<Order | null> => {
  try {
    const order: Order | null = await orderModel.findOne({ _id: id });
    return order;
  } catch (error: any) {
    logger.error(`error getting order with id ${id}`, {
      instance: 'services',
      service: 'getOneOrderByIdService',
      trace: error.message ? error.message : '',
    });
    throw new Error(error.message);
  }
};
