const { request, response } = require("express");
const Post = require("../models/post");
const User = require("../models/user");


//showing all the post in the homepage

module.exports.home = async function (request, response) {
    //  console.log(request.cookies);

    // Post.find({}, function (error, posts) {
    //     return response.render('home', {
    //         title: "Codeial | Home",
    //         posts: posts,
    //     });
    // });

    //find all post and popluate user, putting callback in exec
    try {
        let posts = await Post.find({})
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                }
            })
        let users = await User.find({});

        return response.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users,
        });

    } catch (error) {
        console.log('Error', error);
        return;
    }


}

// module.exports.actionName = function(request,response){}


//using then

//Post.find({}).populate('comments').then(function());
 // OR
// let posts = Post.find({}).populate('comments').exec();

// posts.then();

