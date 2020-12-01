const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send('you must be logged in');
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, 'AUTHENTICATION_KEY', async (err, payload) => {
    if (err) {
      return res.status(401).send('you must be logged in');
    }
    const { userId } = payload;
    const user = await User.findByPk(userId);
    req.user = user;
    next();
  };