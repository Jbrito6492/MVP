import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes.js';
import renderer from './helpers/render.js';
import createStore from './helpers/createStore.js';

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

app.get('*', (req, res) => {
  const store = createStore();
  matchRoutes(Routes, req.path);
  res.send(renderer(req, store));
});

// app.use('/', routes);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});