import mongoose from 'mongoose';
import { Order } from '../types/Order';

const Schema = mongoose.Schema;

export const orderSchemma = new Schema<Order>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      counter: { type: Number, required: true },
    },
  ],
  userOrderNumber: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Pedido recibido', 'Preparando', 'En camino', 'Entregado'],
    default: 'Pedido recibido',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
