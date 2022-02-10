

// set of different actions
module.exports.home = function(request,response){
    return response.render('home',{
        title:"todo app",
    });
}