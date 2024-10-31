import { Types } from 'mongoose';

export type ProductId = {
  id: Types.ObjectId;
};

export interface Product {
  id: ProductId;
  title: string;
  description: string;
  price: number;
  inventory: number;
  images: string[];
  rating: number;
  sendtype: string[];
  location: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateProduct = Omit<Product, 'created_at' | 'updated_at' | 'id'>;

export type GetProduct = Omit<Product, 'created_at' | 'updated_at'>;
