const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('Router loaded');


router.get('/',homeController.home);
// router.get('/motto',homeController.motto);

//adding any furhter routes, access from here
// router.use('routerName',require('./routerFile'))

router.use('/users',require('./users'));


module.exports = router;