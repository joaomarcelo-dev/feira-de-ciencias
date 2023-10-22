export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_USER = 'ADD_USER';
export const ADD_CHATS = 'ADD_CHATS';
export const ADD_CODES = 'ADD_CODES';
export const STATUS_CONNECTION = 'STATUS_CONNECTION'
export const ADD_MESSAGE_IN_CHAT = 'ADD_MESSAGE_IN_CHAT';
export const RESET_STORE = 'RESET_STORE';

export const addMessage = (message: object) => ({
  type: ADD_MESSAGE,
  message,
});

export const addUser = ({ userName, userPassword, tokenUser, userId  }: UserLogin) => ({
  type: ADD_USER,
  payload: {
    userName,
    userPassword,
    tokenUser,
    userId,
  },
});

export const addChats = (chats: object[]) => ({
  type: ADD_CHATS,
  chats,
});

export const addMessageInChat = (message: object) => ({
  type: ADD_MESSAGE_IN_CHAT,
  payload: message,
});

export const addCodes = (codes: object) => ({
  type: ADD_CODES,
  payload: codes,
});

export const statusConnection = (status: boolean) => ({
  type: STATUS_CONNECTION,
  payload: status,
});

export const resetStoreAction = () => ({
  type: RESET_STORE,
});
