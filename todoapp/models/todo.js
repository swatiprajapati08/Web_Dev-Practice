const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true,
    },
    category : {
        type: String,
        required : true,
    },
    due_date :{
        type: Date,
        required : true,
    }
});


const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo;
