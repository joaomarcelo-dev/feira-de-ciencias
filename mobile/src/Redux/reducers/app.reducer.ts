import AppReducer from "../../types/AppReducer.type";
import { ADD_CHATS, ADD_CODES, ADD_MESSAGE, ADD_USER, STATUS_CONNECTION } from "../actions/app.action";

const INITIAL_STATE: AppReducer = {
  chats: [{
    chatName: 'Chat dos Crias',
    id: 'sdasdasdgaghgdyhtrbafsv',
    members: [{
      chatId: 'sdasdasdgaghgdyhtrbafsv',
      id: 'sdasdasdgaghgdyhtrbafsv',
      userId: 'dfdfdfdfd',
    }],
    thumbnail: 'https://s2-autoesporte.glbimg.com/XXu5TQXbMB6RTOMTp8Mh3n1VZiU=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/O/W/2O03AoTkymI0ZnXyu0gw/nissan-gt-r-nismo-special-edition-my2024-07.jpg'
  }],
  message: [],
  userName: '',
  userPassword: '',
  tokenUser: '',
  idUser: '',
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
        idUser: action.payload.idUser,
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
    default:
      return state;
  }
}

export default appReducer;