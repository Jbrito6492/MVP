const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');

const server = require('http').createServer(app)
const routes = require('./routes/routes.js');

const io = require('socket.io')(server)

io.on('connection', socket => {
  // welcome user
  socket.emit('message', 'Jesus has left the chat');

  // broadcast when user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  //Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')
  })
})

const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
  res.send('<h2>whats the move?</h2>')
})

// app.use('/', routes);

app.use(express.static(path.join(__dirname, '../public/dist')));

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});