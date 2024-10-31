import { orderModel } from '../entity/model/orderModel';
import { CreateOrder } from '../entity/types/Order';
import { logger } from '../../logger/appLoger';
import { MESSAGE_ERROR_USER_NOT_FOUND, MESSAGE_SUCCESS } from '../../constants';
import { io } from '../../index';
import { tokenmessageModel } from '../../tokenmessage/entity/model/tokenmessageModel';
import dotenv from 'dotenv';

import admin from 'firebase-admin';
dotenv.config();

const serviceAccount = JSON.parse(`${process.env.SERVICE_ACCOUNT_KEY}` as string);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const updateOneOrderService = async (orderId: string, order: CreateOrder): Promise<string> => {
  try {
    if (!orderId) throw new Error(`No se provisó el id de la orden`);
    await orderModel.updateOne({ _id: orderId }, { $set: order });
    const orderToUser = await orderModel.findOne({ _id: orderId });
    if (!orderToUser) throw new Error(MESSAGE_ERROR_USER_NOT_FOUND);
    const token_user = await tokenmessageModel.findOne({ userId: orderToUser.userId });
    if (!token_user) throw new Error(MESSAGE_ERROR_USER_NOT_FOUND);

    io.emit('orderStatusUpdated', { _id: orderId, status: order.status });

    const message = {
      token: token_user.token,
      notification: {
        title: 'Tienes una actualización en tu orden',
        body: 'Tu estado de la orden ha cambiado a ' + order.status + '.',
      },
    };

    await admin.messaging().send(message);
    return MESSAGE_SUCCESS;
  } catch (error: any) {
    logger.error(`error getting order with id ${orderId}`, {
      instance: 'services',
      service: 'updateOneOrderService',
      trace: error.message ? error.message : '',
    });
    throw new Error(error.message);
  }
};
