import MessageModel from "../model/message.model";
import { Message, NewMessage }from "../types/Message.types";
import httpCodes from "../utils/httpCodes";


const messageModel = new MessageModel();

class MessageService {
  async getMessage({ chatId }: Message) {
    const messages = await messageModel.getMessage({ chatId });
    return {
      status: httpCodes.SUCCESS_FULL,
      data: messages,
    };
  }


  async getAllMessages() {
    const messages = await messageModel.getAllMessages();
    return {
      status: httpCodes.SUCCESS_FULL,
      data: messages,
    };
  }

  async createMessage(dataMessage: NewMessage) {
    const newMessage = await messageModel.createMessage(dataMessage)

    return {
      status: httpCodes.CREATED,
      data: newMessage,
    }
  }

}

export default MessageService;
