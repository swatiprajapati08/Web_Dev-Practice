let request=require("request");
let cheerio= require("cheerio");

function getAllMatches(link)
{
    request(link,callbackFun);
}

function callbackFun(error,response,html){

    if(error==null && response.statusCode==200)
    {
         parseData(html);
    }
    else if(response.statusCode == 404)
    {
        console.log("Page not found");
    }
    else
    {
        console.log(error);
    }
}

function parseData(html)
{
    let ch=cheerio.load(html);
    let allTag=ch('a[data-hover="Scorecard"]');
    //console.log(allTag.length);

    for(let i = 0 ; i<allTag.length ; i++){
     let link=ch(allTag[i]).attr("href");
     let completeLink="https://www.espncricinfo.com" +link;
     console.log(completeLink);
    }
}

module.exports=getAllMatches;