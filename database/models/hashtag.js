const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  hashtag: String,
  activeUsers: {
    type: Number,
    default: 0
  }
});

const hashtag = mongoose.model('hashtag', hashtagSchema);

module.exports = hashtag;
