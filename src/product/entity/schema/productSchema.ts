import mongoose from 'mongoose';
import { Product } from '../types/Product';

const Schema = mongoose.Schema;

export const productSchemma = new Schema<Product>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  inventory: {
    type: Number,
  },
  images: [String],
  rating: {
    type: Number,
  },
  sendtype: [{ type: String }],
  location: {
    type: String,
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
