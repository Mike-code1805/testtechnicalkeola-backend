import { NextFunction, Request, Response } from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { updateOneOrderService } from '../services';
import { MESSAGE_SUCCESS } from '../../constants';

export const updateOneOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateOneOrderService(req.params.id, req.body);
    res.status(200).json(MESSAGE_SUCCESS);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
