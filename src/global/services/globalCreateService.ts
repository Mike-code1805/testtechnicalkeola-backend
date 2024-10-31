import { globalModel } from '../entity/model/globalModel';
import { logger } from '../../logger';
import { MESSAGE_SUCCESS } from '../../constants';
import { CreateGlobal } from '../entity/types/Global';

export const globalCreateService = async (body: CreateGlobal) => {
  try {
    await globalModel.create(body);

    return MESSAGE_SUCCESS;
  } catch (error: any) {
    logger.error('Error validating secret code', {
      instance: 'services',
      fn: 'globalCreateService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
