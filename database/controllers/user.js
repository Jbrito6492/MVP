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

exports.authenticate = (req, res) => {
  const { session_id } = req.cookies;
  User.findById(session_id, 'username')
    .then(({ username, _id }) => {
      console.log(`id: ${typeof _id} cookie: ${typeof session_id}`)
      JSON.stringify(_id) !== JSON.stringify(session_id) ? res.json({
        msg: 'invalid credentials',
        isAuthenticated: false
      }) :
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

exports.createAccount = (req, res) => {
  const { username, password } = req.body;
  User.create({
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
      res.json({ err: err.message })
    });
}