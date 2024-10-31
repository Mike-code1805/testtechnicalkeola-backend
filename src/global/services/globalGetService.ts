import { logger } from '../../logger';
import { globalModel } from '../entity/model/globalModel';
import { MESSAGE_ERROR_GLOBAL_NOT_FOUND } from '../../constants';

export const globalGetService = async () => {
  try {
    const global = await globalModel.find({}, 'versionBundle');
    if (global.length === 0) throw new Error(MESSAGE_ERROR_GLOBAL_NOT_FOUND);
    return global[0];
  } catch (error: any) {
    logger.error('Error validating secret code', {
      instance: 'services',
      fn: 'globalGetService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
