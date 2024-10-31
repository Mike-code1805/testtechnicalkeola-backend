import { CreateUser, User } from '../../user/entity/types/User';
import { encryptPassword } from '../utils';
import { userModel } from '../../user/entity/model/userModel';
import { getExistUserByEmailService } from '../../user/services';
import { logger } from '../../logger';
import { MESSAGE_ERROR_USER_EXISTS } from '../../constants';

export const authSignupUserService = async (userRequest: CreateUser): Promise<User> => {
  try {
    const { email, password } = userRequest;

    const existUser = await getExistUserByEmailService(email);
    if (existUser) throw new Error(MESSAGE_ERROR_USER_EXISTS);

    const encryptedPassword = await encryptPassword(password);
    const user = await userModel.create({ ...userRequest, password: encryptedPassword });
    return user as User;
  } catch (error: any) {
    logger.error('Error creating user account', {
      instance: 'services',
      fn: 'authSignupUserService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
