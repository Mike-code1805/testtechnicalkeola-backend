import { logger } from '../../logger';
import { tokenmessageModel } from '../entity/model/tokenmessageModel';
import { MESSAGE_ERROR_TOKENMESSAGE_NOT_FOUND } from '../../constants';

export const tokenmessageGetService = async () => {
  try {
    const tokenmessage = await tokenmessageModel.find({}, 'timeDiffToRegister timeTodayToRegister timeDiffToRegisterApprove versionBundle');
    if (tokenmessage.length === 0) throw new Error(MESSAGE_ERROR_TOKENMESSAGE_NOT_FOUND);
    return tokenmessage[0];
  } catch (error: any) {
    logger.error('Error validating secret code', {
      instance: 'services',
      fn: 'tokenmessageGetService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
