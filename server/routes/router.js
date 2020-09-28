const router = require('express').Router();
const controller = require('../../database/controllers/user.js');

router.post('/create', controller.create)
router.get('/users', controller.retrieve)
router.get('/current_user', controller.validate)
router.post('/login', controller.login)

module.exports = router;