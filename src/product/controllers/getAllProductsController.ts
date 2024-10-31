import { NextFunction, Request, Response } from 'express';
import { getAllProductsService } from '../services';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const getAllProductsController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
