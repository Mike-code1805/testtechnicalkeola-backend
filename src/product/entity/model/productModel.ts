import mongoose from "mongoose";
import { productSchemma } from "../schema/productSchema";
import { Product } from "../types/Product";

export const productModel = mongoose.model<Product>('Product', productSchemma);