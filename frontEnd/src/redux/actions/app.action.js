export const SET_TOKEN = 'SET_TOKEN';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_USERS = 'SET_USERS';
export const ALTER_USERS = 'ALTERE_USERS';

export const setTokenAction = (token) => ({
  type: SET_TOKEN,
  payload: token
});

export const setMessageAction = (message) => ({
  type: SET_MESSAGE,
  payload: message
});

export const setUsersAction = (users) => ({
  type: SET_USERS,
  payload: users
});

export const alterUsersAction = (users) => ({
  type: ALTER_USERS,
  payload: users
})