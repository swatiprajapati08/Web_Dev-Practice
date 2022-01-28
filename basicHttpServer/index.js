const http = require('http');
const port = 8000;
const fs = require('fs');


function requestHandler(request,response){
    console.log(request.url);
    response.writeHead(200,{'content-type':'text/html'});
    let filePath;
    switch(request.url){
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
    }


    fs.readFile(filePath,function(error,data){
       if(error){
           console.log('error',error);
           return;
       }
       return response.end(data);
    });
}

const server = http.createServer(requestHandler);

server.listen(port,function(error){
    if(error){
        console.log("Facing issue");
        return;
    }
    console.log("Server is up and running",port);
});