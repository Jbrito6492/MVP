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
    res.send(500);
  });
}