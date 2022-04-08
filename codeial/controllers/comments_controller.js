const Comment = require('../models/comments');
const Post = require('../models/post');

// module.exports.create = async function (request, response) {
//     try {
//         let post = await Post.findById(request.body.post);
//         if (post) {
//             let Comment = await Comment.create({
//                 content: request.body.content,
//                 post: request.body.post,
//                 user: request.user._id,
//             });
//             request.flash('success','Comment added');
//             post.comments.push(Comment);
//             post.save(); //save into database
//             response.redirect('/');
//         }
//     } catch (err) {
//         //console.log('Error', err);
//         request.flash('error',err);
//         return;
//     }
// }
module.exports.create = async function(req, res){

    try{
        let post = await Post.findById(req.body.post);

        if (post){
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });

            post.comments.push(comment);
            post.save();
            req.flash('success', 'Comment published!');

            res.redirect('/');
        }
    }catch(err){
        req.flash('error', err);
        return;
    }
    
}


// module.exports.destroy = async function (request, response) {
//     try {
//         let comment = await Comment.findById(request.params.id);
//         if (comment.user = request.user.id) {
//             //delete the comment but before that save the post.id and delete hat comment before from particular post

//             let postId = comment.post;
//             comment.remove();
//             Post.findOneAndUpdate(postId, { $pull: { comments: request.params.id } }, function (err, post) {
//                 request.flash('error','Comment deleted');
//                 return response.redirect('back');
//             });
//         }
//         else 
//         {
//             request.flash('error','You cannot delete comment');
//             return response.redirect('back');
//         }
//     } catch (err) {
//         console.log('Error', err);
//         return;
//     }
// }


module.exports.destroy = async function(req, res){

    try{
        let comment = await Comment.findById(req.params.id);

        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            let post = Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});
            req.flash('success', 'Comment deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'Unauthorized');
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
        return;
    }
    
}

