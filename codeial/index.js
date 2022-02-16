const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));

//use4 before routes
app.use(expressLayouts);
//extract style and sheets from subpages into the llayout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);





//add express router
app.use('/',require('./routes'));

//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(error){
    if(error){
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Server is running in ports ${port}`);
});