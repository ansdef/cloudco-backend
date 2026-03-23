import jwt from 'jsonwebtoken';

export const generateToken = (userId: string): string => {
  return jwt.sign(
    { userId },
    (process.env.JWT_SECRET || 'secret') as string,
    { expiresIn: '7d' }
  );
};
