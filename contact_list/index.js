const express = require('express');
const path = require('path')
const port = 8000;

const app = express(); //app have all functionality to start server

app.set('view engine', 'ejs'); // setting ejs (Template engine)
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded());

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
    return response.render('home', {
        title: "My Contact list",
        contact_list : contactList,
    });  //home file name
});

app.get('/practice', function (request, response) {
    return response.render('practice', {
        title: "Let's play with ejs"
    });
});

app.post('/create_contact',function(request,response){
    // contactList.push({
    //     name : request.body.name,
    //     phone : request.body.phone,
    // });

    contactList.push(request.body);

//    return response.redirect('/');
      return response.redirect('back');
});

app.listen(port, function (error) {
    if (error) {
        console.log("Error is running in server", error);
        return;
    }
    console.log("My server is Up", port);
})