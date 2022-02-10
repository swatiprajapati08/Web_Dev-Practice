const express = require('express');
const app = express();
const port = 8000;

// //add express router (by default fetches index)
app.use('/',require('./routes'));

// //setup the view engine
// app.set('view engine','ejs');
// app.set('views','./views');


app.listen(port,function(error){
    if(error){
        console.log(`Error :${error}`);
        return;
    }
    console.log(`Server is running at port ${port}`);
});