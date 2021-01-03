const router = require('express').Router();
const userController = require('../controllers/user.js');
const hashtagController = require('../controllers/hashtag.js');

router.get('/users', userController.retrieve)
router.post('/coords', userController.saveLocation)

// authentication
router.get('/authenticate', userController.authenticate)
router.post('/authenticate', userController.signUp)
router.post('/logout', userController.logout)

// hashtag
router.post('/hashtag', hashtagController.createHashtag)
router.patch('hashtag', hashtagController.deleteHashtag)
router.get('/hashtag', hashtagController.getHashtags)

module.exports = router;