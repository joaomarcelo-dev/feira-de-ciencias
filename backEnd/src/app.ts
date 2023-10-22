import express from 'express';
import { Server, Socket } from 'socket.io';
import { createServer }  from 'node:http';
import { codesRouter, userRouter, chatRouter, messageRouter } from './router';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH']
  },
});

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/message', messageRouter);
app.use('/codes', codesRouter);

io.on('connection', (socket: Socket) => {
  console.log(`Socket conectado: ${socket.id}`);
  socket.on('reset-app', () => {
    io.emit('reset-app');
  });
});


server.listen(3333, () => console.log('Servidor rodando')); 