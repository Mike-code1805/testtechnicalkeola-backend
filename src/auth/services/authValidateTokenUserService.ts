import { createAuthToken } from '../utils/tokenManager';
import { logger } from '../../logger/appLoger';
import { TokenResponse } from './authLoginUserService';
import { getOneUserByIdService } from '../../user/services';

export const authValidateTokenUserService = async (id: string): Promise<TokenResponse> => {
  try {
    const authToken = createAuthToken({ id });
    const user = await getOneUserByIdService(id);
    return {
      authToken,
      id: user.id,
      username: user.username,
      lastname: user.lastname,
      email: user.email,
      type_user: user.type_user,
    };
  } catch (error: any) {
    logger.error('Error creating tokens auth token', {
      instance: 'services',
      fn: 'authValidateTokenUserService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
