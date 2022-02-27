const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    },
    function (email, password, done) {
        //find the user and establish the idenity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user-->passport');
                return done(err);
            }

            if(!user || user.password != password){
                console.log("Invalid UserName/password");
                return done(null,false);  // no error, authentication is failed
            } 
            return done(null,user);  // no error, authetication is successfull
        })
    }
));


//serializing the user to decide which key is to be kept in the cookie

passport.serializeUser(function(user,done){
    done(null,user.id); // automatic encrypt and put in cookies
});

//deserializing the user from the key in the cookies

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user-->passport');
            return done(err);
        }
        return done(null,user);
    });
});


//check if the user is authenticate(use as middleware)
passport.checkAuthentication = function(request,response,next){
    //if user is signed-in, then pass on the request to the next function(controller's action)
    if(request.isAuthenticated()){
        return next();
    }
    //if the user id not signed in
    return response.redirect('/users/sign-in');
}
passport.setAuthenticatedUser = function(request,response,next){
    if(request.isAuthenticated()){
        // request.user contains the current signed in user from the session cookie and we are just sending this to the local for the views
        response.locals.user = request.user;
    }
    next();
}
module.exports = passport;