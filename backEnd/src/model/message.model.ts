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

  async createMessage({ message, chatId, userId, messageNoCryp }: NewMessage ) {
    const newMessage = await prisma.message.create({
      data: {
        message,
        chatId,
        userId,
        messageNoCryp,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    return newMessage;
  }

  async deleteAllMessages() {
    const messages = await prisma.message.deleteMany();

    return messages;
  }
}

export default MessageModel;
