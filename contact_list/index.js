const express = require('express');
const path = require('path')
const port = 8000;

const app = express(); //app have all functionality to start server
app.set('view engine', 'ejs'); // setting ejs (Template engine)

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

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