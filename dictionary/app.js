console.log("APp.js");

let inputVal = document.getElementById('inputForm');

inputVal.addEventListener('submit',fetchApi);

function fetchApi(e){
    let val = document.getElementById('inputBtn').value;
    console.log(val);
    console.log('Button click');
    e.preventDefault();
}



