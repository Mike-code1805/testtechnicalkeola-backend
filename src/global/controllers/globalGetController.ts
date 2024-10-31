import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors';
import { globalGetService } from '../services';

export const globalGetController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await globalGetService();
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
