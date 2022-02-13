const express = require('express');
const router = express.Router();
const moment = require("moment");
// setting up the controller
const mainController = require('../controllers/main_controller');

console.log('Router loaded');
const app = express(); //app have all functionality to start server
// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

//using a controller(action) on get /
router.get('/',mainController.getTask);
router.post('/create_task',mainController.createTask);
router.get('/delete-task',mainController.deleteTask);


module.exports = router;

