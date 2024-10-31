import mongoose from 'mongoose';
import { Tokenmessage } from '../types/Tokenmessage';

const Schema = mongoose.Schema;

export const tokenmessageSchemma = new Schema<Tokenmessage>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String },
  },
  { timestamps: true }
);
