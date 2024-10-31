import { logger } from '../../logger/appLoger';
import { validatePassword } from '../utils';
import { getOneUserByEmailService } from '../../user/services';
import { LoginUser, User } from '../../user/entity/types/User';
import { MESSAGE_ERROR_AUTH_CREDENTIALS_INVALID } from '../../constants';

export const authValidateUserService = async (userRequest: LoginUser): Promise<User> => {
  try {
    const { email, password } = userRequest;
    const user = await getOneUserByEmailService(email);
    const auth = await validatePassword(password, user.password);
    if (!auth) throw new Error(MESSAGE_ERROR_AUTH_CREDENTIALS_INVALID);

    return user;
  } catch (error: any) {
    logger.error('Error validating user credentials', {
      instance: 'services',
      fn: 'authValidateUserService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
