const router = require('express').Router();
const controller = require('../../database/controllers/user.js');

router.post('/create', controller.create)
router.get('/users', controller.retrieve)
router.get('/current_user', controller.auth)

module.exports = router;