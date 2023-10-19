import io, { Socket } from 'socket.io-client';
import { endPoint } from '../../Provider/app.server';
import store from '../../Redux/store.redux';
import { addMessage, statusConnection } from '../../Redux/actions/app.action';

const socket = io(endPoint);

socket.on('connection', (socket: Socket) => {
  store.dispatch(statusConnection(true));
  console.log('client: ', socket.id)
});

socket.on('newMessage', (data) => {
  console.log('newMessage: ', data)
  store.dispatch(addMessage(data))
});
