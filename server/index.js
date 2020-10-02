import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes.js';
import renderer from './helpers/render.js';
import createStore from './helpers/createStore.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const router = require('./routes/router.js');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app)
const morgan = require('morgan');
const db = require('../database/index.js');
const io = require('socket.io')(server);
const socketConfig = require('./websocketConfig/socketIO.js');
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', router);
app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  ));
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
});

socketConfig(app, port);

