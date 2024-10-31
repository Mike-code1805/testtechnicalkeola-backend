import jwt, { UserIdJwtPayload } from 'jsonwebtoken';

export const createAuthToken = (payload: {}, secret?: string): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}${secret}`, {
    expiresIn: '7d',
  });
};

export const createRefreshToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_REFRESH_SECRET}`, {
    expiresIn: '1w',
  });
};

export const validateAuthToken = (token: string, secret?: string) => {
  return jwt.verify(token, `${process.env.JWT_AUTH_SECRET}${secret}`) as UserIdJwtPayload;
};

export const validateRefreshToken = (token: string) => {
  return jwt.verify(token, `${process.env.JWT_REFRESH_SECRET}`);
};
