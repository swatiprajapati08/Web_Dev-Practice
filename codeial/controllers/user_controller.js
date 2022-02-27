const User = require('../models/user')
module.exports.profile = function (request, response) {

    if (request.cookies.user_id) {
        User.findById(request.cookies.user_id, function (error, user) {

            if (user) {
                return response.render('users', {
                    title: "users",
                    user: user,
                });
            } else {
                return response.redirect('/users/sign-in');
            }
        });
    } else {
        return response.redirect('/users/sign-in');
    }

}

module.exports.signUp = function (request, response) {
    return response.render('user_sign_up', {
        title: "Codiel | Sign Up",
    });
};

module.exports.signIn = function (request, response) {
    return response.render('user_sign_in', {
        title: "Codiel | SIgn In",
    });
}

//get the sign up data
module.exports.create = function (request, response) {
    if (request.body.password != request.body.confirm_password) {
        return response.redirect('back');
    }

    //email is unique
    User.findOne({ email: request.body.email }, function (error, user) {
        if (error) {
            console.log('error in finding the user in signing up');
            return;
        }
        if (!user) {
            User.create(request.body, function (error, user) {
                if (error) {
                    console.log('error in creating the user while signing up');
                    return;
                }
                return response.redirect('/users/sign-in');
            });
        }
        else {
            return response.redirect('back');
        }
    });


}


//sign in and create a session for the user
module.exports.createSession = function (request, response) {
    //find the user 
    User.findOne({ email: request.body.email }, function (error, user) {
        if (error) {
            console.log('error in finding the user in signing in');
            return;
        }
        //handle user found
        if (user) {
            //handle password which don't match
            if (user.password != request.body.password) {
                return response.redirect('back');
            }
            //handle session creation
            response.cookie('user_id', user.id);
            return response.redirect('/users/profile');

        } else {
            //handle user not found
            return response.redirect('back');
        }

    });





}