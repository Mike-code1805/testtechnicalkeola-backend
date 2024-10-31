import { logger } from '../../logger/appLoger';
import { MESSAGE_ERROR_USER_EXISTS, MESSAGE_ERROR_USER_NOT_FOUND } from '../../constants';
import { getExistUserByEmailService } from '../../user/services';

export const authVerifyEmailService = async (email: string): Promise<String> => {
  try {
    const existUser = await getExistUserByEmailService(email);
    if (existUser) throw new Error(MESSAGE_ERROR_USER_EXISTS);
    return MESSAGE_ERROR_USER_NOT_FOUND;
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authVerifyEmailService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
