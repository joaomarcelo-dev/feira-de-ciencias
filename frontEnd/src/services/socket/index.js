import io, { } from 'socket.io-client';
import { endPoint } from '../../provider/server.provider';
import store from '../../redux/store';
import { setMessageAction, setUsersAction } from '../../redux/actions/app.action';
import { getAllUser } from '../../utils/getUsers';

const socket = io(endPoint);

socket.on('connect', async () => {
  const users = await getAllUser();
  store.dispatch(setUsersAction(users));
});

socket.on('newMessage', (message) => {
  store.dispatch(setMessageAction(message))
});

socket.on('new-user', async () => {
  const users = await getAllUser();
  store.dispatch(setUsersAction(users));
});

socket.on('delete-user', async () => {
  const users = await getAllUser();
  store.dispatch(setUsersAction(users));
});

export default socket;
