import { Types } from 'mongoose';

export interface SecretCode {
  id: SecretCodeId;
  email: string;
  code: number;
}

export type SecretCodeId = {
  _id: Types.ObjectId;
};

export type CreateSecretCode = Omit<SecretCode, 'id'>;
