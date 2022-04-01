const Comment = require('../models/comments');
const Post = require('../models/post');

module.exports.create = function(request,response){
   Post.findById(request.body.post, function(error,post){
       if(post){
           Comment.create({
               content:request.body.content,
               post : request.body.post,
               user:request.user._id,
           },function(error,Comment){
               //handle error


               post.comments.push(Comment);
               post.save(); //save into database
               response.redirect('/');
           });
       }
   });
}