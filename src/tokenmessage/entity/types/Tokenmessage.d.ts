import { Types } from 'mongoose';
import { UserId } from '../../../user/entity/types/User';

export type TokenmessageId = {
  id: Types.ObjectId;
};

export interface Tokenmessage {
  id: TokenmessageId;
  userId: UserId;
  token: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateTokenmessage = Omit<Tokenmessage, 'created_at' | 'updated_at' | 'id'>;
