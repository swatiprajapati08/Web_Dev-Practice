const express = require('express');
const path = require('path')
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./model/contact');

const app = express(); //app have all functionality to start server

app.set('view engine', 'ejs'); // setting ejs (Template engine)
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

//adding a our middleware

// app.use(function(request,response,next){
//     console.log("middle ware 1");
//     next();  // call next middleware if present otherwise controller
// });

// app.use(function(request,response,next){
//     console.log("Middleware 2");
//     next();
// });
// ------------------------------------------------------------------------------------------------
//adding static files

app.use(express.static('assets'));


var contactList = [
    {
        name: 'Swati',
        phone: "74555966529",
    },
    {
        name: 'Mani',
        phone: "9956681703",
    },
    {
        name: "Tony Stark",
        phone: "74555966529",
    },];

app.get('/', function (request, response) {
    //getting from db
    Contact.find({}, function (error, contacts) {
        if (error) {
            console.log("Error is running in server", error);
            return;
        }
        return response.render('home', {
            title: "My Contact list",
            contact_list: contacts,
        });  //home file name
    });
});

app.get('/practice', function (request, response) {
    return response.render('practice', {
        title: "Let's play with ejs"
    });
});

app.post('/create_contact', function (request, response) {
    // contactList.push({
    //     name : request.body.name,
    //     phone : request.body.phone,
    // });

    // contactList.push(request.body);

    //adding in database
    Contact.create({
        name: request.body.name,
        phone: request.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log('error in creating a contact');
            return;
        }
        console.log('*********', newContact);
        return response.redirect('back');
    });



    //    return response.redirect('/');
    //   return response.redirect('back');
});


//deleting a contact 
// QYERY  & PARAMS
//PARAM:->
// app.get('/delete-contact/:phone',function(request,response){
//     let phone = request.params.phone;
//     console.log(phone)
// });

//QUERY :->
app.get('/delete-contact', function (request, response) {
    // console.log(request.query)
    // getting id from url
    let id = request.query.id;

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone)
    // if (contactIndex != -1)
    //     contactList.splice(contactIndex, 1);

    //delete from data 
    //find the contact from db and delete the db
    Contact.findByIdAndDelete(id, function (error) {
        if (error) {
            console.log('Error in deleting an object');
            return;
        }
        return response.redirect("back");
    });
});


//server
app.listen(port, function (error) {
    if (error) {
        console.log("Error is running in server", error);
        return;
    }
    console.log("My server is Up", port);
})