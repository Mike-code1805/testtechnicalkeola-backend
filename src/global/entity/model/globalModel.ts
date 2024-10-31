import { model } from 'mongoose';
import { Global } from '../types/Global';
import { globalSchemma } from '../schema/globalSchema';

export const globalModel = model<Global>('Global', globalSchemma);
