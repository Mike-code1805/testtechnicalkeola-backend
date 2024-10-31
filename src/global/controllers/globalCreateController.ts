import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors';
import { globalCreateService } from '../services';
import { CreateGlobal } from '../entity/types/Global';

export const globalCreateController = async (req: Request<{}, {}, CreateGlobal>, res: Response, next: NextFunction) => {
  try {
    const response = await globalCreateService(req.body);
    res.status(200).json({ message: response });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
