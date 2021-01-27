const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const router = require('./routes/router.js');
const { generateCookie } = require('./middlewares');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

generateCookie(app);

app.use('/', router);

app.listen(port, () => {
  console.log(`api server running on port ${port}`);
});
