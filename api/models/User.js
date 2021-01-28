const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    longitude: { type: String },
    latitude: { type: String }
  },
  hashtag: String
});

const user = mongoose.model('User', userSchema);

module.exports = user;