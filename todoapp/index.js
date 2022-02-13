const express = require('express');

const db = require('./config/mongoose');
const Todo = require('./models/todo')

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
//adding static files
app.use(express.static('assets'));

// //add express router (by default fetches index)
app.use('/',require('./routes/index'));

//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(error){
    if(error){
        console.log(`Error :${error}`);
        return;
    }
    console.log(`Server is running at port ${port}`);
});