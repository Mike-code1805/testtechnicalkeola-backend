import { authSendValidateUserEmailService } from '../../auth/services';
import { secretCodeModel } from '../entity/model/secretCodeModel';
import { MESSAGE_ERROR_SECRETCODE_RECENTLY_GENERATED, MESSAGE_SUCCESS } from '../../constants';
import { logger } from '../../logger';

export const secretCodeRegenerateService = async (email: string) => {
  try {
    const existCode = await secretCodeModel.find({ email }).sort({ createdAt: -1 });

    if (existCode.length > 0) {
      const lastCode: any = existCode[0];
      const oneMinuteAgo = new Date(Date.now() - 60 * 1000);

      if (lastCode.createdAt > oneMinuteAgo) throw new Error(MESSAGE_ERROR_SECRETCODE_RECENTLY_GENERATED);

      const ids = existCode.map((e) => e._id);
      await secretCodeModel.deleteMany({ _id: { $in: ids } });
    }

    const code = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
    await secretCodeModel.create({ email, code });

    await authSendValidateUserEmailService(email, code);
    return MESSAGE_SUCCESS;
  } catch (error: any) {
    logger.error('Error generating secret code', {
      instance: 'services',
      fn: 'secretCodeRegenerateService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
