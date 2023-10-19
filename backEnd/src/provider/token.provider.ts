import jwt, { JwtPayload, verify } from 'jsonwebtoken';
import 'dotenv/config';
import Token from '../types/Token.types';

const JWT_SECRET = process.env.JWT_SECRET || 'ai dentro'

interface DecodedToken {
  id: string
}

export const generateToken = (payload: Token) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1d',
  });
};

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};