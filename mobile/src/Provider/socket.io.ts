import io from 'socket.io-client';

const socket = io('http://localhost:3333');

socket.on('newMessage', (message) => {
  console.log(message); 
});