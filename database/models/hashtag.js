const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  hashtag: String,
  activeUsers: Number
});

const hashtag = mongoose.model('hashtag', hashtagSchema);

module.exports = hashtag;
