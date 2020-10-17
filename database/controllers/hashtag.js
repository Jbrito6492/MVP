const Hashtag = require('../models/hashtag.js');

exports.createHashtag = (req, res) => {
  const { hashtag } = req.body;
  let options = { upsert: true, new: true, setDefaultsOnInsert: true };
  Hashtag.findOneAndUpdate({ hashtag }, { $inc: { activeUsers: 1 } }, options).exec()
    .then(result => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500);
    })
}

exports.deleteHashtag = (req, res) => {
  const { hashtag } = req.body;
  let options = { upsert: true, new: true, setDefaultsOnInsert: true };
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
