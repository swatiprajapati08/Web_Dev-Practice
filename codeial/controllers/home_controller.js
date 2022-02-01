const { request, response } = require("express")

module.exports.home = function(request,response){
  return response.end('<h1>Express Codeial</h1>')
}

// module.exports.actionName = function(request,response){}

module.exports.motto = function(request,response){
    return response.end('<h1>Hello motto</h1>');
}