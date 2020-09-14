const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');

const App = require('../src/components/App.jsx').default;

const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const server = require('http').createServer(app)
const routes = require('./routes/routes.js');

const io = require('socket.io')(server, { serveClient: false })

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

app.use(bodyParser.json());

app.get('*', (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const html = `
  <html>
    <head>
    </head>
    <body>
      <div id="root">
        ${content}
      </div>
    </body>
  </html>
`;
  res.send(html)
});

// app.use('/', routes);

app.use(express.static(path.join(__dirname, '../public/dist')));

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});