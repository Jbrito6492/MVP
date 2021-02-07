import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes.js';
import template from './helpers/renderTemplate.js';
import createStore from './helpers/createStore.js';
import proxy from 'express-http-proxy';

const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const socketConfig = require('../socketio/socketio.server.js');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/api', proxy('http://localhost:3000'));

app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  ));

  Promise.all(promises).then(() => {
    res.send(template(req, store));
  })
});

socketConfig(app, port);

