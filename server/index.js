import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes.js';
import renderReact from './helpers/render.js';
import createStore from './helpers/createStore.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const routes = require('./routes/router.js');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require('./database/index.js');
const socketConfig = require('./websocketConfig/socketio.server.js');
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  ))
  Promise.all(promises).then(() => {
    res.send(renderReact(req, store));
  })
});

app.use('/api', routes);

socketConfig(app, port);

