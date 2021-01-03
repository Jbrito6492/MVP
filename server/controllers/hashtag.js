const Hashtag = require('../models/hashtag.js');

exports.createHashtag = (req, res) => {
  const { hashtag } = req.body;
  let options = { upsert: true, new: true, setDefaultsOnInsert: true, useFindAndModify: false };
  Hashtag.findOneAndUpdate({ hashtag }, { $inc: { activeUsers: 1 } }, options).exec()
    .then(({ activeUsers, hashtag }) => {
      res.json({ activeUsers, hashtag });
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500);
    })
}

exports.deleteHashtag = (req, res) => {
  const { hashtag } = req.body;
  let options = { upsert: true, new: true, setDefaultsOnInsert: true, useFindAndModify: false };
  Hashtag.findOneAndUpdate({ hashtag }, { $inc: { activeUsers: -1 } }, options).exec()
    .then(result => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500);
    })
}

exports.getHashtags = (req, res) => {
  Hashtag.find({}).exec()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
}
