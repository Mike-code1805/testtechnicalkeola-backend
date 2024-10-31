import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getAllOrdersByUserIdService } from '../services';

export const getAllOrdersByUserIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.params;
    const orders = await getAllOrdersByUserIdService(userId);
    res.status(200).json(orders);
  } catch (error: any) {
    next(new ApplicationError(403, error.message));
  }
};
