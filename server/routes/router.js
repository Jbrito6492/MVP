const router = require('express').Router();
const userController = require('../../database/controllers/user.js');
const hashtagController = require('../../database/controllers/hashtag.js');

router.get('/users', userController.retrieve)
router.post('/coords', userController.saveLocation)

// authentication
router.get('/authenticate', userController.authenticate)
router.post('/authenticate', userController.createAccount)
router.post('/logout', userController.logout)

// hashtag
router.post('/hashtag', hashtagController.createHashtag)

module.exports = router;