import io from 'socket.io-client';
let socket;

export const connectSocket = (room) => {
  socket = io('http://localhost:5000');
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
  if (socket) socket.emit('chat', { room, username, message, date });
}