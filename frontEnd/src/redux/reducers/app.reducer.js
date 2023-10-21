import { SET_MESSAGE, SET_TOKEN } from "../actions/app.action"

const INITIAL_STATE = {
  token: '',
  message: {
    message: '',
    user: {
      name: '',
    }
  },
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
    default:
      return state
  }
}

export default appReducer