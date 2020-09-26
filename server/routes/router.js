const router = require('express').Router();
const controller = require('../../database/controllers/user.js');

router.post('/create', controller.create)
router.get('/users', controller.retrieve)

module.exports = router;