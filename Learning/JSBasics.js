console.log("Welcome to tut 15");
let doc = document.querySelector('.container');
// console.log(doc.childNodes); // show all text,comment
// console.log(doc.children); // show only elements
let element = document.createElement('li');
let text = document.createTextNode('i m text node');
element.appendChild(text);
element.className ='childul';
element.id= 'createdli';
// element.innerText ='hello by swati';
// element.innerHTML ='<b>hello by swati</b>';
let ul = document.querySelector('ul.this');
ul.appendChild(element);

//add a class name to li element

// console.log(element);

let elem2 = document.createElement('h3');
elem2.id ='elem2id';
elem2.className = 'elemnode';
let text2 = document.createTextNode('i m text2');
elem2.appendChild(text2);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

let q = document.createElement('h1');
let textinside = document.createTextNode('Go to CodeWithHarry');
q.appendChild(textinside);
let alink = document.createElement('a');
alink.setAttribute('href',"https://www.codewithharry.com");
alink.appendChild(q);
console.log(alink);