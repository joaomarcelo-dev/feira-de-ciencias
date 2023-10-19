export interface Message {
  chatId: string;
}

export interface NewMessage {
  message: string,
  chatId: string,
  userId: string,
}
