module.exports = socketConfig = (app, port) => {
  const server = require('http').createServer(app)
  const io = require('socket.io')(server)

  io.on('connection', socket => {
    console.log(`connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`disconnected: ${socket.id}`);
    })
    socket.on('join', room => {
      console.log(`socket ${socket.id} joining ${room}`);
      socket.join(room);
    })
    socket.on('chat', data => {
      const { message, room } = data;
      console.log(`msg: ${message}, room: ${room}`);
      io.to(room).emit('chat', message);
    })
  })
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}