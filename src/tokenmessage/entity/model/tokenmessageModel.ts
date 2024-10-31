import { model } from 'mongoose';
import { Tokenmessage } from '../types/Tokenmessage';
import { tokenmessageSchemma } from '../schema/tokenmessageSchema';

export const tokenmessageModel = model<Tokenmessage>('Tokenmessage', tokenmessageSchemma);
