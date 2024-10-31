import { userModel } from '../entity/model/userModel';
import { logger } from '../../logger';

export const getExistUserByIdService = async (id: string): Promise<Boolean> => {
  try {
    const user = await userModel.findOne({ id });

    return user ? true : false;
  } catch (error: any) {
    logger.error(`error getting the user with id: ${id}`, {
      instance: 'services',
      service: 'getExistUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
