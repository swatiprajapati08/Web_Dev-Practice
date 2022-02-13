const mongoose = require('mongoose');

//connect to db
//mongoose.connect('mongodb://localhost/todo_list_db');

mongoose.connect('mongodb://localhost/todo_list_db', function(err) {
    if (err) throw err;
});
//acces the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error in conncting to db'));

// up and running
db.once('open',function(){
    console.log("Succesfully connected to db");
})