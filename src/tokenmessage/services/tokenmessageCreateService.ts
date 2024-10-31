import { tokenmessageModel } from '../entity/model/tokenmessageModel';
import { logger } from '../../logger';
import { MESSAGE_SUCCESS } from '../../constants';
import { CreateTokenmessage } from '../entity/types/Tokenmessage';

export const tokenmessageCreateService = async (body: CreateTokenmessage) => {
  try {
    await tokenmessageModel.create(body);

    return MESSAGE_SUCCESS;
  } catch (error: any) {
    logger.error('Error validating secret code', {
      instance: 'services',
      fn: 'tokenmessageCreateService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
