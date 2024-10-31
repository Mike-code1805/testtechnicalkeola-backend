import { tokenmessageModel } from '../entity/model/tokenmessageModel';
import { logger } from '../../logger';
import { MESSAGE_SUCCESS } from '../../constants';
import { CreateTokenmessage } from '../entity/types/Tokenmessage';
import { userModel } from '../../user/entity/model/userModel';

export const tokenmessageCreateService = async (body: CreateTokenmessage) => {
  try {
    const existToken = await tokenmessageModel.findOne({ userId: body.userId });

    if (existToken) {
      await tokenmessageModel.updateOne({ userId: body.userId }, { $set: body });
      return MESSAGE_SUCCESS;
    } else {
      await tokenmessageModel.create(body);
      return MESSAGE_SUCCESS;
    }
  } catch (error: any) {
    logger.error('Error validating secret code', {
      instance: 'services',
      fn: 'tokenmessageCreateService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
