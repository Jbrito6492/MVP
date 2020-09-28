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
  const { session_id } = req.cookies;
  User.findById(session_id, 'username')
    .then(({ username }) => {
      res.json(username);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
}

exports.login = (req, res) => {
  const { user } = req.body;
  User.create({
    username: user
  })
    .then(({ _id }) => {
      res.cookie('session_id', `${_id}`).json({
        user: user,
        isAuthenticated: true
      });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}