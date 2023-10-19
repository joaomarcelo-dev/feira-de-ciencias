import { Request, Response } from "express";
import ChatService from "../service/chat.service";

const chatService = new ChatService();

class ChatController {
  async createChat(req: Request, res: Response) {
    const { chatName, userId } = req.body;
    const { status, data } = await chatService.createChat({ chatName, userId });

    return res.status(status).json(data);
  }

  async getAllChats(req: Request, res: Response) {
    const { status, data } = await chatService.getAllChats();

    return res.status(status).json(data);
  }
}

export default ChatController;
