import { Types } from 'mongoose';
import { ProductId } from '../../../product/entity/types/Product';
import { UserId } from '../../../user/entity/types/User';

export type OrderId = {
  id: Types.ObjectId;
};

export interface Order {
  id: OrderId;
  userId: UserId;
  userOrderNumber: string;
  items: {
    productId: ProductId;
    counter: number;
  }[];
  totalAmount: number;
  status: 'Pedido recibido' | 'Preparando' | 'En camino' | 'Entregado';
  created_at: Date;
  updated_at: Date;
}

export type CreateOrder = Omit<Order, 'created_at' | 'updated_at' | 'id'>;
