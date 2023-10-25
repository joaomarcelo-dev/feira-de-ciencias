import io, { Socket } from 'socket.io-client';
import { endPoint } from '../../Provider/app.server';
import store from '../../Redux/store.redux';
import { addMessage, addMessageInChat, addUser, statusConnection } from '../../Redux/actions/app.action';
import resetStore from '../../utils/resetStore';

const socket = io(endPoint);

socket.on('connection', (socket: Socket) => {
  store.dispatch(statusConnection(true));
  console.log('client: ', socket.id)

  socket.emit('user-online', {
    id: store.getState().app.tokenUser,
  });
});

socket.on('newMessage', (data) => {
  store.dispatch(addMessageInChat(data))
  console.log(data);
});

socket.on('reset-app', () => {
  resetStore();
})
