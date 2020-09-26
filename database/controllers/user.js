const User = require('../models/user.js');

exports.create = (req, res) => {
  User.create({
    user: req.body.user
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
}

exports.retrieve = (req, res) => {
  User.find({})
  .then(results => {
    console.log('test', results)
    res.json(results);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
}