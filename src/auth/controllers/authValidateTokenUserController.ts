import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors';
import { authValidateTokenUserService } from '../services';

export const authValidateTokenUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const response = await authValidateTokenUserService(userId);
    res.status(200).json(response);
  } catch (error: any) {
    logger.error('Error creating tokens auth token', {
      instance: 'services',
      fn: 'authValidateTokenUserController',
      trace: error.message,
    });
    next(new ApplicationError(400, `${error.message}`));
  }
};
