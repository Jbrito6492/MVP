const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/the_move', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection;

mongoose.set('useFindAndModify', false);

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;