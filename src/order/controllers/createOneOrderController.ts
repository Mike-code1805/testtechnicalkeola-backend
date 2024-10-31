import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { createOneOrderService, generateUserOrderNumber } from '../services';
import { Types } from 'mongoose';

export const createOneOrderController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userId } = req.params;
    const { items, totalAmount } = req.body;

    const userOrderNumber = await generateUserOrderNumber(userId);

    const newOrder = await createOneOrderService({
      userId: new Types.ObjectId(userId),
      userOrderNumber,
      items,
      totalAmount,
      status: 'Pedido recibido',
    });
    res.status(201).json(newOrder);
  } catch (error: any) {
    logger.error('error on create cart controller', {
      instance: 'controller',
      service: 'createOneOrderController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
