interface AppReducer {
  chats: {
    id: string,
    chatName: string,
    thumbnail: string,
    members: {
      id: string,
      userId: string,
      chatId: string,
    }[]
  }[],
  message: object[],
  userName: string,
  userPassword: string,
  tokenUser: string,
  connected: boolean,
  codes: object,
}

export default AppReducer;