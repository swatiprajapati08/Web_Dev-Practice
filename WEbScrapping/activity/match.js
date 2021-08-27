// find all details of each match

let request=require("request");
let cheerio= require("cheerio");

let link="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/south-africa-vs-sri-lanka-35th-match-1144517/full-scorecard";

request(link,callbackFun);


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
  let bothInnings=ch(".card.content-block.match-scorecard-table .Collapsible");
  console.log(bothInnings.length);
}