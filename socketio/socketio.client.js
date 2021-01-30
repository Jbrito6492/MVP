import io from 'socket.io-client';
<<<<<<< HEAD
let socket;

export const connectSocket = (room) => {
  socket = io('http://localhost:5000');
=======
import { v4 as uuidv4 } from 'uuid';
let socket;

export const connectSocket = (room) => {
  socket = io('http://localhost:5000', { transports: ['websocket', 'polling', 'flashsocket'] });
>>>>>>> d85b08e657b0163f3ad97830bcf52bde3b6991cf
  console.log('connecting socket...');
  if (socket && room) socket.emit('join', room);
}

export const disconnectSocket = () => {
  console.log('disconnecting socket...');
  if (socket) socket.disconnect();
}

export const subscribeToChat = (cb) => {
  if (!socket) return (true);
  socket.on('chat', msg => {
    console.log('websocket event received');
    return cb(null, msg);
  })
}

export const sendMessage = (room, username, message, date) => {
<<<<<<< HEAD
  if (socket) socket.emit('chat', { room, username, message, date });
=======
  if (socket) socket.emit('chat', { id: uuidv4(), room, username, message, date });
>>>>>>> d85b08e657b0163f3ad97830bcf52bde3b6991cf
}