import mongoose from 'mongoose';
import { User } from '../types/User';

const Schema = mongoose.Schema;

export const userSchemma = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    type_user: { type: String, required: true, enum: ['google', 'facebook', 'normal'], default: 'normal' },
  },
  { timestamps: true }
);
