const router = require('express').Router();
const controllers = require('../../database/controllers/user.js');

router.post('/auth', controllers.create)

module.exports = router;