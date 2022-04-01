const { request, response } = require("express");
const Post = require("../models/post");


//showing all the post in the homepage

module.exports.home = function (request, response) {
    //  console.log(request.cookies);

    // Post.find({}, function (error, posts) {
    //     return response.render('home', {
    //         title: "Codeial | Home",
    //         posts: posts,
    //     });
    // });

    //find all post and popluate user, putting callback in exec
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user',
        }
    })
    .exec(
        function (error, posts) {
            return response.render('home', {
                title: "Codeial | Home",
                posts: posts,
            });
        });
    

}

// module.exports.actionName = function(request,response){}

module.exports.motto = function (request, response) {
    return response.end('<h1>Hello motto</h1>');
}