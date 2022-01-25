console.log('Tut 17 on event');
// document.querySelector('.container').addEventListener('mousemove',function(e){
//     console.log('you tiggred mouse move');
//     document.body.style.background= `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
// });
//put in local storage
// let arr = ['car','ball','cat'];

// localStorage.setItem('name','swati');
// localStorage.setItem('name2','proaj');
// localStorage.setItem('array',JSON.stringify(arr));
// let c =JSON.parse(localStorage.getItem('array'));
// // localStorage.clear();
// console.log(c);

//session storage same as localstorage but it remove once browser closed.

let h1 = document.getElementById('content');
let divE = document.createElement('div');
// let input = document.createElement('input');
divE.setAttribute('contentEditable',true);
divE.innerHTML = 'i m';
// divE.appendChild(input);
h1.appendChild(divE);

divE.addEventListener('blur',function(){
    localStorage.clear();
    localStorage.setItem('div',`${divE.innerHTML}`);
});

console.log(h1);