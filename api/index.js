const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const session = require('express-session');
const router = require('./routes/router.js');
const MongoDBSession = require('connect-mongodb-session')(session);

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

// cookie authentication setup
const store = new MongoDBSession({
  uri: 'mongodb://localhost/the_move',
  collection: 'mySessions'
})

app.use(session({
  secret: 'key that will sign cookie',
  resave: false,
  saveUninitialized: false,
  store
}));

app.use('/', router);

app.listen(port, () => {
  console.log(`api server running on port ${port}`);
});
