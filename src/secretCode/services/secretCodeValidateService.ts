import { secretCodeModel } from '../entity/model/secretCodeModel';
import { logger } from '../../logger';
import { MESSAGE_ERROR_SECRETCODE_NOT_FOUND, MESSAGE_ERROR_SECRETCODE_INVALID, MESSAGE_SUCCESS } from '../../constants';

export const secretCodeValidateService = async ({ email, code }: { email: string; code: number }) => {
  try {
    const secretCode = await secretCodeModel.findOne({ email });

    if (!secretCode) throw new Error(MESSAGE_ERROR_SECRETCODE_NOT_FOUND);
    if (code !== secretCode.code) throw new Error(MESSAGE_ERROR_SECRETCODE_INVALID);

    return MESSAGE_SUCCESS;
  } catch (error: any) {
    logger.error('Error validating secret code', {
      instance: 'services',
      fn: 'secretCodeValidateService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
