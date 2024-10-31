import { logger } from '../../logger/appLoger';
import { LoginUser, UserId } from '../../user/entity/types/User';
import { authCreateTokenService } from './authCreateTokenService';
import { authValidateUserService } from './authValidateUserService';
import { MESSAGE_ERROR_USER_NOT_VALIDATED } from '../../constants';

export type TokenResponse = {
  id: UserId;
  authToken: string;
  username: string;
  lastname: string;
  email: string;
  type_user: 'normal' | 'deliveryman' | 'admin';
};

export const authLoginUserService = async (userRequest: LoginUser): Promise<TokenResponse> => {
  try {
    const user = await authValidateUserService({ ...userRequest, email: userRequest.email.toLocaleLowerCase() });
    if (!user.valid) throw new Error(MESSAGE_ERROR_USER_NOT_VALIDATED);
    const tokens = await authCreateTokenService(user.id, user.isAdmin);
    return {
      ...tokens,
      id: user.id,
      username: user.username,
      lastname: user.lastname,
      email: user.email,
      type_user: user.type_user,
    };
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authLoginUserService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
