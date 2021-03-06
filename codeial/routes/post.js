const express = require('express');
const router = express.Router();
const passport = require('passport');
const postController = require('../controllers/post_controller');

// user is authenticate then only post the content
router.post('/create',passport.checkAuthentication, postController.create);
router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);
module.exports = router;