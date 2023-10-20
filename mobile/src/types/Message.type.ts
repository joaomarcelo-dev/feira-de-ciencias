interface MessageType {
  message: string,
  chatId: string,
  createdAt: string,
  id: string,
  userId: string,
  user: {
    name: string,
    id: string,
  }
}

export default MessageType;
