const User = require('../models/user')
module.exports.profile = function(request,response){
    User.findById(request.params.id,function(error,user){
        return response.render('users',{
            title:"users",
            profile_user:user,
        });
    })
}

module.exports.signUp = function(request,response){
    
    if(request.isAuthenticated()){
       return response.redirect('/users/profile');
    }

    
    return response.render('user_sign_up',{
        title: "Codiel | Sign Up",
    });
};

module.exports.signIn = function(request,response){
    if(request.isAuthenticated()){
        return response.redirect('/users/profile');
     }
    
    return response.render('user_sign_in',{
        title : "Codiel | SIgn In",
    });
}

//get the sign up data
module.exports.create = function(request,response){
    if(request.body.password != request.body.confirm_password){
        return response.redirect('back');
    }

    //email is unique
    User.findOne({email:request.body.email},function(error,user){
        if(error){
            console.log('error in finding the user in signing up');
            return;
        }
        if(!user){
            User.create(request.body,function(error,user){
                if(error){
                    console.log('error in creating the user while signing up');
                    return;
                }
                return response.redirect('/users/sign-in');
            });
        }
        else{
            return response.redirect('back');
        }
    });


}


//sign in and create a session for the user
module.exports.createSession= function(request,response){
    return response.redirect('/');
    //redirect to home when authenticate with passport
}


module.exports.destroySession = function(request,response){
    request.logout();
    return response.redirect('/');
}


module.exports.update = function(request,response){
    if(request.user.id == request.params.id){
        User.findByIdAndUpdate(request.params.id,
        //     {
        //     name: request.body.name,
        //     email:request.body.email,
        // } or 
        request.body,function(error,user){
            return response.redirect('back');
        })
    }
    else{
        return response.status(401).send('Unauthorised');
    }
}