const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const router = require('./routes/router.js');
const { generateCookie } = require('./middlewares');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

generateCookie(app);

app.use('/', router);

app.listen(port, () => {
  console.log(`api server running on port ${port}`);
});
