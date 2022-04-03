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


module.exports.destroy = function(request,response){
    Comment.findById(request.params.id,function(error,comment){
        if(comment.user = request.user.id){
            //delete the comment but before that save the post.id and delete hat comment before from particular post

            let postId = comment.post;
            comment.remove();
            Post.findOneAndUpdate(postId,{$pull:{comments:request.params.id}},function(err,post){
                return response.redirect('back');
            });
        }
        else{
            return response.redirect('back');
        }
    });
}