const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParser());

//use4 before routes
app.use(expressLayouts);
//extract style and sheets from subpages into the llayout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);






//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name:'codeial',
    //TODO change the secret before deployment
    secret : 'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge : (1000*60*100),  // cookies active till x millisecond
    }
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//add express router
app.use('/',require('./routes'));

app.listen(port,function(error){
    if(error){
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Server is running in ports ${port}`);
});