import { Request, Response } from "express";
import MessageService from "../service/message.service";
import { decodeToken } from "../provider/token.provider";
import { JwtPayload } from "jsonwebtoken";
import httpCodes from "../utils/httpCodes";

const messageService = new MessageService();

class MessageController {
  async getMessagesByChatId(req: Request, res: Response) {
    const { chatId } = req.params;

    const messages = await messageService.getMessage({ chatId });

    return res.status(200).json(messages);
  }

  async getAllMessages(req: Request, res: Response) {
    const messages = await messageService.getAllMessages();

    return res.status(200).json(messages);
  }

  async createMessage(req: Request, res: Response) {
    const { message } = req.body;
    const { authorization } = req.headers;
    const { chatId } = req.params;

    if (!authorization) return

    const [, token] = authorization.split(' ');

    const decode = decodeToken(token)

    return res.status(200).json({
      message: "Deu certo caraio",
      decode,
    });
  }
}

export default MessageController;
