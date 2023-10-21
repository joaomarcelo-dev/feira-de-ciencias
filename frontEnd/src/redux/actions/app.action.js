export const SET_TOKEN = 'SET_TOKEN';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setTokenAction = (token) => ({
  type: SET_TOKEN,
  payload: token
});

export const setMessageAction = (message) => ({
  type: SET_MESSAGE,
  payload: message
});
