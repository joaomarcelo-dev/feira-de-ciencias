import { ALTER_USERS, SET_MESSAGE, SET_TOKEN, SET_USERS } from "../actions/app.action"

const INITIAL_STATE = {
  token: '',
  message: {
    message: '',
    user: {
      name: '',
    }
  },
  users: [],
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case ALTER_USERS:
      return {
        ...state,
        users: () => {
          return state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload
            }

            return user
          });
        }
      }
    default:
      return state
  }
}

export default appReducer