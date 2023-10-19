export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_USER = 'ADD_USER';
export const ADD_CHATS = 'ADD_CHATS';
export const ADD_CODES = 'ADD_CODES';
export const STATUS_CONNECTION = 'STATUS_CONNECTION'

export const addMessage = (message: object) => ({
  type: ADD_MESSAGE,
  message,
});

export const addUser = ({ tokenUser, userName, userPassword }: UserLogin) => ({
  type: ADD_USER,
  payload: {
    tokenUser,
    userName,
    userPassword,
  },
});

export const addChats = (chats: object[]) => ({
  type: ADD_CHATS,
  chats,
});

export const addCodes = (codes: object) => ({
  type: ADD_CODES,
  payload: codes,
});

export const statusConnection = (status: boolean) => ({
  type: STATUS_CONNECTION,
  payload: status,
});
