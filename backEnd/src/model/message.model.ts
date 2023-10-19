import { prisma } from "../provider/prisma.provider";
import { Message, NewMessage } from "../types/Message.types";

class MessageModel {
  async getMessage({ chatId }: Message) {
    const messages = prisma.message.findMany({
      where: {
        chatId,
      },

      include: {
        user: true,
      },
    });

    return {
      status: 200,
      data: messages,
    };
  }

  async getAllMessages() {
    const messages = prisma.message.findMany();

    return {
      status: 200,
      data: messages,
    };
  }

  async createMessage({ message, chatId, userId }: NewMessage ) {
    const newMessage = await prisma.message.create({
      data: {
        message,
        chatId,
        userId,
      }
    });

    return {
      status: 201,
      data: newMessage,
    };
  }
}

export default MessageModel;
