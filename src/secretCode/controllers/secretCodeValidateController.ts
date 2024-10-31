import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors';
import { secretCodeValidateService } from '../services';

export const secretCodeValidateController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, code } = req.body;
  try {
    const response = await secretCodeValidateService({ email, code });
    res.status(200).json({ message: response });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
