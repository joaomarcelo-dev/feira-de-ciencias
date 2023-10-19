import { NextFunction, Request, Response } from "express";
import httpCodes from "../utils/httpCodes";

const verifyChatId = async (req: Request, res: Response, next: NextFunction) => {
  const { chatId } = req.params;

  console.log('chatId', chatId);
  

  if (!chatId) {
    return res.status(httpCodes.BAD_REQUEST).json({
      message: 'chatId is required in params',
    });
  }

  next();
}

const messageMiddleware = {
  verifyChatId,
};

export default messageMiddleware;
