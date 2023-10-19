import { prisma } from "../provider/prisma.provider";


class ChatModel {
  async createChat({ chatName, userId, thumbnail }: any ) {
    const chatCreated = await prisma.chats.create({
      data: {
        chatName,
        userId,
        thumbnail
      },
    });

    return chatCreated;
  };

  async getAllChats() {
    return await prisma.chats.findMany({
      include: {
        members: true,
      }
    });
  } 
}

export default ChatModel;
