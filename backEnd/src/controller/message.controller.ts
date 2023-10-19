import { Request, Response } from "express";
import MessageService from "../service/message.service";
import { decodeToken } from "../provider/token.provider";
import { JwtPayload } from "jsonwebtoken";

const messageService = new MessageService();

class MessageController {
  async getMessagesByChatId(req: Request, res: Response) {
    const { chatId } = req.params;

    const { status, data } = await messageService.getMessage({ chatId });

    return res.status(status).json(data);
  }

  async getAllMessages(req: Request, res: Response) {
    const { status, data } = await messageService.getAllMessages();
    return res.status(status).json(data);
  }

  async createMessage(req: Request, res: Response) {
    const { message } = req.body;
    const { authorization } = req.headers;
    const { chatId } = req.params;

    if (!authorization) return

    const [, token] = authorization.split(' ');

    const decode = decodeToken(token)

    const { id } = decode as JwtPayload;

    const { status, data } = await messageService.createMessage({
      message,
      chatId,
      userId: id,
    });

    return res.status(status).json(data);
  }
}

export default MessageController;
