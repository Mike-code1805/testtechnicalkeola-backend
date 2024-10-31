import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { adminGetAllOrdersByUserIdService } from '../services';

export const adminGetAllOrdersByUserIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orders = await adminGetAllOrdersByUserIdService();
    res.status(200).json(orders);
  } catch (error: any) {
    next(new ApplicationError(403, error.message));
  }
};
