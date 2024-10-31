import mongoose from 'mongoose';
import { Global } from '../types/Global';

const Schema = mongoose.Schema;

export const globalSchemma = new Schema<Global>(
  {
    versionBundle: { type: Number },
  },
  { timestamps: true }
);
