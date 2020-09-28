const User = require('../models/user.js');

exports.retrieve = (req, res) => {
  User.find({})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}

exports.validate = (req, res) => {
  const { cookies } = req;
  res.end();
}

exports.login = (req, res) => {
  const { user } = req.body;
  User.create({
    user: user
  })
    .then(() => {
      res.json({
        user: user,
        isAuthenticated: true
      });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}