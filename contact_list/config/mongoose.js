const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/contacts_list_db');

//access the connection(to check if it is sucessfull)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running
db.once('open',function(){
    console.log('Successfully connexted to the database')
})
