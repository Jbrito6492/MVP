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

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.redirect('/');
    const isAuthenticated = await bcrypt.compare(password, user.password);
    if (!isAuthenticated) return res.redirect('/');
    res.json({
      username: user.username,
      isAuthenticated,
    });
  } catch (err) {
    console.log(err);
    res.json({
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






