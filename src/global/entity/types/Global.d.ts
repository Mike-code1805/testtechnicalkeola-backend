import { Types } from 'mongoose';

export interface Global {
  versionBundle: number;
}

export type GlobalId = {
  _id: Types.ObjectId;
};

export type CreateGlobal = Omit<Global, 'id'>;
