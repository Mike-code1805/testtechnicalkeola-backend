import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors';
import { tokenmessageGetService } from '../services';

export const tokenmessageGetController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await tokenmessageGetService();
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
