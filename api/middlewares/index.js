const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);

// cookie authentication setup
function generateCookie(app) {
  const store = new MongoDBSession({
    uri: 'mongodb://localhost/the_move',
    collection: 'mySessions'
  })

  app.use(session({
    secret: 'gAjPTE7GNMgDw92',
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: true,
    },
    store
  }));
}

module.exports = { generateCookie };