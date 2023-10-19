import ChatModel from "../model/chat.model";
import { Chat } from "../types/Chat.types";

const chatModel = new ChatModel();

class ChatService {
  async createChat({chatName, userId }: Chat ) {
    const chatCreated = await chatModel.createChat({ chatName, userId });

    return {
      status: 201,
      data: chatCreated,
    }
  }

  async getAllChats() {
    const chats = await chatModel.getAllChats();

    return {
      status: 200,
      data: chats,
    }
  }
}

export default ChatService;