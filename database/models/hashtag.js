const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  hashtag: String
});

const hashtag = mongoose.model('hashtag', hashtagSchema);

module.exports = hashtag;
