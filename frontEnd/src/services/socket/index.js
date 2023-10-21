import io from 'socket.io-client';
import { endPoint } from '../../provider/server.provider';
import store from '../../redux/store';
import { setMessageAction } from '../../redux/actions/app.action';

const socket = io(endPoint);

socket.on('connect', () => {
  console.log('connected to socket.io server');
});

socket.on('newMessage', (message) => {
  store.dispatch(setMessageAction(message))
});

export default socket;
