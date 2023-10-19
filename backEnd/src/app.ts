import express from 'express';
import { Server, Socket } from 'socket.io';
import { createServer }  from 'node:http';
import { codesRouter, userRouter, chatRouter, messageRouter } from './router';

const app = express();
app.use(express.json());
const server = createServer(app);
const io = new Server(server);

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

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/message', messageRouter);
app.use('/codes', codesRouter);


app.get('/test', (req, res) => {
  res.json({ message: 'Hello World' });
})

io.on('connection', (socket: Socket) => {
  console.log(`Socket conectado: ${socket.id}`);
});

server.listen(3333, () => console.log('Servidor rodando')); 