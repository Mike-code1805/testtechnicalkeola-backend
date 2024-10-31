import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors';
import { tokenmessageCreateService } from '../services';
import { CreateTokenmessage } from '../entity/types/Tokenmessage';
import { Types } from 'mongoose';

export const tokenmessageCreateController = async (
  req: Request<{ userId: string }, {}, CreateTokenmessage>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const response = await tokenmessageCreateService({ ...req.body, userId: new Types.ObjectId(userId) });
    res.status(200).json({ message: response });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
