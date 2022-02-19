module.exports.profile = function(request,response){
    return response.render('users',{
        title:"users",
    });
}

module.exports.signUp = function(request,response){
    return response.render('user_sign_up',{
        title: "Codiel | Sign Up",
    });
};

module.exports.signIn = function(request,response){
    return response.render('user_sign_in',{
        title : "Codiel | SIgn In",
    });
}

//get the sign up data
module.exports.create = function(request,response){
    //TODO Later
}


//sign in and create a session for the user
module.exports.createSession= function(request,response){
    //TODO Later
}