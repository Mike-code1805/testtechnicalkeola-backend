import mongoose from 'mongoose';
import { orderSchemma } from '../schema/orderSchema';
import { Order } from '../types/Order';

export const orderModel = mongoose.model<Order>('Order', orderSchemma);
