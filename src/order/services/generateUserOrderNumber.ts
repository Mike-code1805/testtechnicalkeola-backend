import { Types } from 'mongoose';
import { orderModel } from '../entity/model/orderModel';

export const generateUserOrderNumber = async (userId: string): Promise<string> => {
  const lastOrder = await orderModel.findOne({ userId }).sort({ created_at: -1 });
  const lastOrderNumber = lastOrder ? parseInt(lastOrder.userOrderNumber) : 0;
  const nextOrderNumber = lastOrderNumber + 1;
  return `${nextOrderNumber.toString().padStart(6, '0')}`;
};
