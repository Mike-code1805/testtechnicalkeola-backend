import { NextFunction, Request, Response } from 'express';
import { CreateUser } from '../../user/entity/types/User';
import { authLoginUserService, authSignupUserService } from '../services';
import { ApplicationError } from '../../customErrors';

export const authSignupUserController = async (req: Request<{}, {}, CreateUser>, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    await authSignupUserService(req.body);
    const response = await authLoginUserService({ email, password });
    res.status(201).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
