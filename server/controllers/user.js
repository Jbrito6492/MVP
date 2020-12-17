const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

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

exports.authenticate = (req, res) => {
  const { session_id } = req.cookies;
  User.findById(session_id, 'username')
    .then(({ username, _id }) => {
      res.json({
        id: _id, username,
        isAuthenticated: true,
        token: session_id
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        msg: 'invalid credentials',
        isAuthenticated: false
      });
    })
}

exports.logout = (req, res) => {
  try {
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

exports.saveLocation = (req, res) => {
  console.log(req.body)
  res.sendStatus(200);
}

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  console.log('request body', req.body)
  await User.create({
    username,
    password
  })
    .then(({ _id }) => {
      res.cookie('session_id', `${_id}`, { sameSite: 'strict' }).json({
        token: `${_id}`,
        username
      });
    })
    .catch(err => {
      console.log(err);
      res.status(422).send(err.message);
    });
};

