import AppReducer from "../../types/AppReducer.type";
import { ADD_CHATS, ADD_CODES, ADD_MESSAGE, ADD_MESSAGE_IN_CHAT, ADD_USER, RESET_STORE, STATUS_CONNECTION } from "../actions/app.action";

const INITIAL_STATE: AppReducer = {
  chats: [],
  message: [],
  userName: '',
  userPassword: '',
  tokenUser: '',
  userId: '',
  connected: false,
  codes: {},
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userName: action.payload.userName,
        userPassword: action.payload.userPassword,
        tokenUser: action.payload.tokenUser,
        userId: action.payload.userId,
      };
    case ADD_CHATS:
      return {
        ...state,
        chats: [...state.chats, ...action.chats],
      };
    case ADD_MESSAGE:
      return {
        ...state,
        message: [...state.message, action.message],
      };

    case ADD_MESSAGE_IN_CHAT:
      return {
        ...state,
        chats: state.chats.map((chat) => {
          if (chat.id === action.payload.chatId) {
            console.log('CHAT ENCONTRADO');
            
            chat.Message.push(action.payload);

          }

          return chat;
        }),
      }
    case ADD_CODES:
      return {
        ...state,
        codes: action.payload
      }
    case STATUS_CONNECTION:
      return {
        ...state,
        connected: action.payload,
      }

    case RESET_STORE:
      return INITIAL_STATE
      
    default:
      return state;
  }
}

export default appReducer;