
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../client/src/components/app/App.jsx').default;
const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const layout = require('./templates/layout.js')
const server = require('http').createServer(app)
const routes = require('./routes/routes.js');
const morgan = require('morgan');
const db = require('../database/index.js');
const io = require('socket.io')(server);

io.on('connection', socket => {
  // welcome user
  socket.emit('message', 'Whats the move?')

  // runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')
  })

  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

const port = process.env.PORT || 80;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {

  const title = 'Whats the Move';
  const content = ReactDOMServer.renderToString(<App />);
  res.send(layout(title, content))
});

app.use('/', routes);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});