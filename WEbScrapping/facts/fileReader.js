
//fs module => file system


let cheerio = require("cheerio");
let fs=require("fs");

//let f1kadata= fs.readFileSync('./f1.text');  // tell the data in BUffer form whatever the machine understand

let f1kadata= fs.readFileSync('./f1.text','utf-8'); 

console.log(f1kadata);

 //another optn

let f1kadata2= fs.readFileSync('./f1.text');
console.log(f1kadata2+"");

let c= fs.readFileSync('./index.html');
// console.log(ch);


let ch = cheerio.load(c);

let h1kaData= ch("h1").text();
console.log(h1kaData);


//let a = 50 + ""; //convert into string property of JS
