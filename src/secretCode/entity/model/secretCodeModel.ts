import { model } from 'mongoose';
import { SecretCode } from '../types/SecretCode';
import { secretCodeSchemma } from '../schema/secretCodeSchema';

export const secretCodeModel = model<SecretCode>('SecretCode', secretCodeSchemma);
