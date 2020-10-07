const router = require('express').Router();
const controller = require('../../database/controllers/user.js');

router.get('/users', controller.retrieve)
router.post('/coords', controller.saveLocation)

// authentication
router.get('/authenticate', controller.authenticate)
router.post('/authenticate', controller.createAccount)
router.post('/logout', controller.logout)

module.exports = router;