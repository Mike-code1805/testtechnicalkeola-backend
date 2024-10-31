import { authSendValidateUserEmailService } from '../../auth/services';
import { secretCodeModel } from '../entity/model/secretCodeModel';
import { MESSAGE_ERROR_SECRETCODE_EXISTS, MESSAGE_SUCCESS } from '../../constants';
import { logger } from '../../logger';

export const secretCodeGenerateService = async (email: string) => {
  try {
    const existsSecretCode = await secretCodeModel.findOne({ email });
    if (existsSecretCode) throw new Error(MESSAGE_ERROR_SECRETCODE_EXISTS);
    const code = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
    await secretCodeModel.create({ email, code });
    await authSendValidateUserEmailService(email, code);
    return MESSAGE_SUCCESS;
  } catch (error: any) {
    logger.error('Error generating secret code', {
      instance: 'services',
      fn: 'secretCodeGenerateService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
