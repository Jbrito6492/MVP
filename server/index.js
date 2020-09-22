
import express from 'express';
import renderReact from './helpers/renderReact.js';

const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app)
const routes = require('./routes/routes.js');
const morgan = require('morgan');
const db = require('../database/index.js');
const io = require('socket.io')(server);

io.on('connection', socket => {

  socket.emit('message', 'Whats the move?')

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')
  })

  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

const port = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderReact());
});

app.use('/', routes);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});