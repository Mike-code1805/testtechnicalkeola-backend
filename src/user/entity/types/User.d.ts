import { Types } from 'mongoose';

export interface User {
  id: UserId;
  username: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  password: string;
  valid: boolean;
  type_user: 'normal' | 'deliveryman' | 'admin';
}

export type EditUser = {
  username?: string;
  lastname?: string;
  email?: string;
  password?: string;
  type_user?: 'normal' | 'deliveryman' | 'admin';
  valid?: boolean;
};

export type UserId = {
  _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;

export type LoginUser = {
  password: string;
  email: string;
};
