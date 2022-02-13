const express = require('express');
const db = require('../config/mongoose');
const Todo = require('../models/todo')
// const app = express();
// const bp = require('body-parser')
// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))
// app.use(bp.json())

// set of different actions
module.exports.getTask = function (request, response) {
    //getting from db
    Todo.find({}, function (error, tasks) {
        if (error) {
            console.log("Error in running server", error);
            return;
        }
        return response.render('home', {
            title: "My Todo list",
            task_list: tasks,
        });
    });
}

module.exports.createTask = function (request, response) {

    //adding the database
    Todo.create({
        task: request.body.task ,
        category: request.body.category,
        due_date: request.body.due_date,
    }, function (error, newTask) {
        if (error) {
            console.log('error in creating a contact');
            return;
        }
        console.log(request.body);
        console.log(request.body.task);
        console.log('*********', newTask);
        return response.redirect('back');
    });
}

//delete contact

module.exports.deleteTask = function (request, response) {
    let id = request.query.id;
    Todo.findByIdAndDelete(id, function (error) {
        if (error) {
            console.log('Error in deleting an object');
            return;
        }
        return response.redirect("back");
    })
}
