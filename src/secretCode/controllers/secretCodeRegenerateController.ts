import { NextFunction, Request, Response } from 'express';
import { CreateSecretCode } from '../entity/types/SecretCode';
import { ApplicationError } from '../../customErrors';
import { secretCodeRegenerateService } from '../services';

export const secretCodeRegenerateController = async (
  req: Request<{}, {}, CreateSecretCode>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const response = await secretCodeRegenerateService(email);
    res.status(201).json({ message: response });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
