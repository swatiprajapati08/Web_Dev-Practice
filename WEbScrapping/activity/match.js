// find all details of each match
let fs=require("fs");
const request=require("request");
let cheerio= require("cheerio");


//let link="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/south-africa-vs-sri-lanka-35th-match-1144517/full-scorecard";
function getMatch(link){
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
  let bothInnings=ch(".card.content-block.match-scorecard-table .Collapsible");
    for(let i=0;i<bothInnings.length;i++)
    {
        let teamName=ch(bothInnings[i]).find("h5").text();
        
        teamName=teamName.split("INNINGS")[0].trim(); //splitting the name of country.
        console.log(teamName);

        let allTrs=ch(bothInnings[i]).find(".table.batsman tbody tr");
        for(let j=0;j<allTrs.length-1;j++)
        {
            let allTds=ch(allTrs[j]).find("td");
            if(allTds.length > 1){
                let batsmanName=ch(allTds[0]).find("a").text().trim();
                let runs=ch(allTds[2]).text().trim();
                let balls=ch(allTds[3]).text().trim();
                let fours=ch(allTds[5]).text().trim();
                let sixes=ch(allTds[6]).text().trim();
                let strikeRate=ch(allTds[7]).text().trim();
                 console.log(` Batsmen =${batsmanName} Runs =${runs} Balls =${balls} fours = ${fours} sixes= ${sixes} SR = ${strikeRate}`);
            }
        }
    }
    console.log("####################################################");
}

module.exports =getMatch;