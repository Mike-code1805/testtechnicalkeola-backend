import { userModel } from '../entity/model/userModel';
import { User } from '../entity/types/User';
import { logger } from '../../logger';
import { MESSAGE_ERROR_USER_NOT_FOUND } from '../../constants';

export const getOneUserByEmailService = async (email: string): Promise<User> => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) throw new Error(MESSAGE_ERROR_USER_NOT_FOUND);
    return user;
  } catch (error: any) {
    logger.error(`error getting the user with email: ${email}`, {
      instance: 'services',
      service: 'getOneUserByEmailService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
