import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../utils/tokenManager';
import { ApplicationError } from '../../customErrors/ApplicationError';
import {
  MESSAGE_AUTH_TOKEN_EXPIRED,
  MESSAGE_AUTH_TOKEN_NOT_FOUND,
  MESSAGE_AUTH_TOKEN_INVALID,
  MESSAGE_ERROR_USER_NOT_FOUND,
  MESSAGE_AUTH_TOKEN_NOADMIN,
} from '../../constants';
import { getExistUserByIdService } from '../../user/services/getExistUserByIdService';
import { getOneUserByIdService } from '../../user/services/getOneUserByIdService';

export const authUserTokenValidationAndIsAdmin = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return next(new ApplicationError(400, MESSAGE_AUTH_TOKEN_NOT_FOUND));

    const { id } = validateAuthToken(authorization);
    if (!id) next(new ApplicationError(400, MESSAGE_AUTH_TOKEN_INVALID));

    const user = await getOneUserByIdService(id);
    if (!user.isAdmin) next(new ApplicationError(400, MESSAGE_AUTH_TOKEN_NOADMIN));

    const existUser = await getExistUserByIdService(id);
    if (!existUser) next(new ApplicationError(400, MESSAGE_ERROR_USER_NOT_FOUND));
    req.params.userId = id;
    next();
  } catch (error: any) {
    if (error.message === 'jwt expired') return next(new ApplicationError(401, MESSAGE_AUTH_TOKEN_EXPIRED));
    next(new ApplicationError(401, 'Acceso Denegado.'));
  }
};
