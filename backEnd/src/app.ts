import express from 'express';
import { Server, Socket } from 'socket.io';
import { createServer }  from 'node:http';
import { codesRouter, userRouter, chatRouter, messageRouter } from './router';

const app = express();
app.use(express.json());
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH']
  },
});

// app.route('/*')
//   .all(({ path, method, baseUrl, ip }) => {
//     console.table({
//       "END_POINT": baseUrl,
//       "ROTA": path,
//       "METODO": method,
//       "IP": ip
//     })
//   });
// ;

const messages: object[] = [];

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/message', messageRouter);
app.use('/codes', codesRouter);

// app.post('/message', (req, res) => {
//   const message = req.body;
//   messages.push(message);

//   io.emit('newMessage', message);
//   console.log(message);

//   return res.json(message);
// });

// app.get('/message', (req, res) => {
//   return res.json(messages);
// });

io.on('connection', (socket: Socket) => {
  console.log(`Socket conectado: ${socket.id}`);
});

server.listen(3333, () => console.log('Servidor rodando')); 