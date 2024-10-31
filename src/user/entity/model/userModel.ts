import { model } from 'mongoose';
import { User } from '../types/User';
import { userSchemma } from '../schema/userSchema';

export const userModel = model<User>('User', userSchemma);
