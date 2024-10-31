import mongoose from 'mongoose';
import { SecretCode } from '../types/SecretCode';

const Schema = mongoose.Schema;

export const secretCodeSchemma = new Schema<SecretCode>(
  {
    email: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
