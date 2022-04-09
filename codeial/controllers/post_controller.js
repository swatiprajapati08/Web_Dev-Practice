const Post = require('../models/post');
const Comment = require('../models/comments');
module.exports.create = async function (request, response) {
    try {
        let post = await Post.create({
            content: request.body.content,
            user: request.user._id,
        });

        if (request.xhr){
            return response.status(200).json({
                data: {
                    post: post
                },
                message: "Post created!"
            });
        }


        request.flash('success','Post Published !')
        return response.redirect('back');
    } catch (err) {
        // console.log('Error', err);
        request.flash('error',err);
        return response.redirect('back');;
    }

    
}


module.exports.destroy = async function (request, response) {

    try {
        let post = await Post.findById(request.params.id);
        // user is authorised or not(neans user which created that post)

        //.id means converting the objct into the string
        if (post.user == request.user.id) {
            post.remove();
            await Comment.deleteMany(
                { post: request.params.id });

                request.flash('success','Post and associated comments deleted!')
            return response.redirect('back');
        }
        else {
            request.flash('error','You cannot delete this post');
            return response.redirect('back');
        }
    } catch (err) {
        console.log('Error', err);
        request.flash('error','You cannot delete this post');
            return response.redirect('back');
    }

}