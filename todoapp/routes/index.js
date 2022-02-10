const express = require('express');
const router = express.Router();
// setting up the controller
const mainController = require('../controllers/main_controller');

console.log('Router loaded');

//using a controller(action) on get /
router.get('/',mainController.home);


module.exports = router;

