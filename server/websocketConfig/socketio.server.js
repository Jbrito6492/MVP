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
      const { username, message, room, date } = data;
      console.log(`username: ${username}, msg: ${message}, room: ${room}, date: ${date}`);
      io.to(room).emit('chat', data);
    })
  })
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}