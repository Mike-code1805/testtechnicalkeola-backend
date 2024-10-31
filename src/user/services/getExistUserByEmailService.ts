import { userModel } from '../entity/model/userModel';
import { logger } from '../../logger';

export const getExistUserByEmailService = async (email: string): Promise<Boolean> => {
  try {
    const user = await userModel.findOne({ email });

    return user ? true : false;
  } catch (error: any) {
    logger.error(`error getting the user with email: ${email}`, {
      instance: 'services',
      service: 'getExistUserByEmailService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
