const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const { route } = require('./post');
console.log('Router loaded');  


router.get('/',homeController.home);
// router.get('/motto',homeController.motto);

//adding any furhter routes, access from here
// router.use('routerName',require('./routerFile'))
//whenever any request come to /users then go back to users
router.use('/users',require('./users'));
router.use('/posts',require('./post'));


module.exports = router;