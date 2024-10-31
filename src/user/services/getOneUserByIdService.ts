import { logger } from '../../logger/appLoger';
import { userModel } from '../entity/model/userModel';
import { User } from '../entity/types/User';
import { MESSAGE_ERROR_USER_NOT_FOUND } from '../../constants';

export const getOneUserByIdService = async (id: string): Promise<User> => {
  try {
    const user = await userModel.findOne({ _id: id });
    if (!user) throw new Error(MESSAGE_ERROR_USER_NOT_FOUND);
    return user;
  } catch (error: any) {
    logger.error(`error getting user with id ${id}`, {
      instance: 'services',
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
