import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { authVerifyEmailService } from '../services';

export const authVerifyEmailController = async (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await authVerifyEmailService(req.body.email);
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(401, error.message));
  }
};
