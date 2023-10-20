interface AppReducer {
  chats: {
    id: string,
    chatName: string,
    thumbnail: string,
    members: {
      id: string,
      userId: string,
      chatId: string,
    }[],
    Message: {
      message: string,
      chatId: string,
      createdAt: string,
      id: string,
      userId: string,
      user: {
        name: string,
        id: string,
      }
    }[],
  }[],
  message: object[],
  userName: string,
  userPassword: string,
  tokenUser: string,
  userId: string,
  connected: boolean,
  codes: object,
}

export default AppReducer;