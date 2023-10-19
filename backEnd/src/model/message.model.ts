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

    return messages;
  }

  async getAllMessages() {
    const messages = prisma.message.findMany();

    return messages;
  }

  async createMessage({ message, chatId, userId }: NewMessage ) {
    const newMessage = await prisma.message.create({
      data: {
        message,
        chatId,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
          }
        }
      }
    });

    return newMessage;
  }
}

export default MessageModel;
