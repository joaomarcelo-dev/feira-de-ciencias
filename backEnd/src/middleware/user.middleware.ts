import { NextFunction, Request, Response } from "express";
import httpCodes from '../utils/httpCodes';

export const validateNameInput = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(httpCodes.BAD_REQUEST).json({
      message: 'Invalid name'
    });
  }

  if (name.length < 2) {
    return res.status(httpCodes.BAD_REQUEST).json({
      message: 'Name must be at least 2 characters'
    });
  }
  next();
}

export const validatePasswordInput = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(httpCodes.BAD_REQUEST).json({
      message: 'Invalid password'
    });
  }

  if (password.length < 4) {
    return res.status(httpCodes.BAD_REQUEST).json({
      message: 'Password must be at least 4 characters',
    });
  }
  next();
}