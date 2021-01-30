const User = require('../models/User.js');

exports.createHashtag = async (req, res) => {
  const { search, email, location } = req.body;
  const { hashtag } = search;
  try {
    // create #
    const user = await User.findOne({ email });
    user.hashtag = hashtag;
    user.location = location;
    user.save();
    res.json({
      hashtag
    });
    // if connection is lost erase this data as well as location from db
  } catch (err) {
    console.log(err);
    res.status(422).send(err.message);
  }
}

exports.deleteHashtag = (req, res) => {
  const { hashtag } = req.body;
}

exports.getHashtags = async (req, res) => {
  const users = await User.find({ hashtag: { $exists: true, $ne: null } });
  let activeHashtags = [];
  for (let i = 0; i < users.length; i++) {
    if (activeHashtags.length === 5) return;
    activeHashtags.push(users[i].hashtag);
  }
  res.json(activeHashtags);
}
