const Hashtag = require('../models/user.js');

exports.createHashtag = (req, res) => {
  const { hashtag } = req.body;
  // check to see if hashtag exists
  // if not creat a chatroom, increase active user number
  // if so join chatroom, initiate active user number to 1
  res.sendStatus(200);
}
