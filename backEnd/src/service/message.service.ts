import MessageModel from "../model/message.model";
import { Message, NewMessage }from "../types/Message.types";

const messageModel = new MessageModel();

class MessageService {
  async getMessage({ chatId }: Message) {
    const messages = await messageModel.getMessage({ chatId });
    return messages;
  }


  async getAllMessages() {
    const messages = await messageModel.getAllMessages();
    return messages;
  }

  async createMessage(dataMessage: NewMessage) {
    const newMessage = await messageModel.createMessage(dataMessage)
  }

}

export default MessageService;
