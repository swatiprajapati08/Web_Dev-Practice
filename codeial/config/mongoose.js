const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.log.bind(console,"Error connectiong to MongoDb"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;