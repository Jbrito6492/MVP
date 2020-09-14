const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const App = require('../client/src/components/App.jsx').default;
const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const layout = require('./templates/layout.js')
const server = require('http').createServer(app)
const routes = require('./routes/routes.js');

// const io = require('socket.io')(server);

// io.on('connection', socket => {
//   // Welcome user
//   socket.emit('message', 'Jesus has left the chat');

//   // Broadcast when user connects
//   socket.broadcast.emit('message', 'A user has joined the chat');

//   // Runs when client disconnects
//   socket.on('disconnect', () => {
//     io.emit('message', 'A user has left the chat')
//   })
// })

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(req.url);
  console.log(path.join(__dirname, '/public'))
  next()
})

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const context = {};
  const title = 'Whats the Move';
  const content = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}><App /></StaticRouter>);
  const scripts = `<script type="text/javascript src="client_bundle.js"></script>`;
  res.send(layout(title, content, scripts))
});

// app.use('/', routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});