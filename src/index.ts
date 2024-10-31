import { createDbConection } from './config/databaseConfig';
import dotenv from 'dotenv';
import app from './app';

import { Server, Socket } from 'socket.io';

dotenv.config();
createDbConection(`${process.env.MONGO_URI}`);

const expressServer = app.listen(process.env.PORT, () => console.log(`Server Started on port ${process.env.PORT}`));

const io = new Server(expressServer, {
  cors: {
    origin: 'exp://localhost:8081',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  },
  transports: ['websocket', 'polling'],
});

io.on('connection', (socket: Socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on('joinOrderRoom', () => { 
  });

  socket.on('disconnect', () => {
    console.log(`Usuario desconectado: ${socket.id}`);
  });
});

export { io };
