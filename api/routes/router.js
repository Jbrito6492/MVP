const router = require('express').Router();
const userController = require('../controllers/user.js');
const hashtagController = require('../controllers/hashtag.js');
const mapController = require('../controllers/map.js');

router.get('/users', userController.retrieve);

// authentication
router.get('/main', userController.authenticate);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// hashtag
router.post('/hashtag', hashtagController.createHashtag);
router.patch('/hashtag', hashtagController.deleteHashtag);
router.get('/hashtag', hashtagController.getHashtags);
router.post('/room', hashtagController.setRoom);

// map
router.post('/coords', mapController.saveLocation);
router.post('/mapradius', mapController.saveRadius);

module.exports = router;