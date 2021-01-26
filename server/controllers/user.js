const User = require('../models/User.js');

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

exports.signIn = (req, res) => {
  const { username, password } = req.body;
  console.log('username:', username)
  console.log('password:', password)
  User.find({ username })
    .then((username) => {
      res.json({
        username,
        isAuthenticated: true,
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
  console.log('username:', username)
  console.log('password:', password)

  await User.create({
    username,
    password
  })
    .then(({ _id }) => {
      res.cookie('session_id', `${_id}`, { sameSite: 'strict' }).json({
        token: `${_id}`,
        username,
        isAuthenticated: false
      });
    })
    .catch(err => {
      console.log(err);
      res.status(422).send(err.message);
    });
};

