const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.redirect('/');
    const hashedPW = await bcrypt.hash(password, 12);
    await User.create({
      username,
      email,
      password: hashedPW
    })
    res.status(200).json({
      username,
      isAuthenticated: false
    });
  } catch (err) {
    console.log(err);
    res.status(422).send(err.message);
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('user not found');

    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (!isAuthenticated) throw new Error('invalid password');

    req.session.isAuthenticated = true;
    res.json({
      username: user.username,
      isAuthenticated,
      email: user.email
    });
  } catch (err) {
    console.log(err);
    res.status(422).json({
      msg: 'invalid credentials',
      isAuthenticated: false
    });
  }
}

exports.authenticate = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/');
  }
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
  req.session.destroy((err) => {
    if (err) throw err
  });
  res.redirect('/');
}







