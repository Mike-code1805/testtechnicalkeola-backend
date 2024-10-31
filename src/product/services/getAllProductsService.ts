import { logger } from '../../logger/appLoger';
import { GetProduct, Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';

export const getAllProductsService = async (): Promise<GetProduct[]> => {
  try {
    const products: Product[] = await productModel.find(
      {},
      '_id title description price inventory images rating sendtype location'
    );
    const formattedProducts = products.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      inventory: product.inventory,
      images: product.images,
      rating: product.rating,
      sendtype: product.sendtype,
      location: product.location,
    }));
    return formattedProducts;
  } catch (error: any) {
    logger.error('error getting the products', {
      service: 'getAllProductsService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
