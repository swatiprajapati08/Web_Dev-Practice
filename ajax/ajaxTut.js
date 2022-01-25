console.log("Ajax 30");

let fetchBtn = document.getElementById("fetch");

fetchBtn.addEventListener('click',fetchOnButtonClick);
function fetchOnButtonClick(){
    console.log('You have clicked fetch button');

    const xbr = new XMLHttpRequest();

    //Open the object
    //true for async hona chahiye
    xbr.open('GET','https://fakestoreapi.com/products',true);
     

    // xbr.open('POST','https://fakestoreapi.com/products',true);
    // xbr.getResponseHeader('Contebt-type','application/json');
    // What to do on progress(optional)
    xbr.onprogress = function(){
        console.log('On Progress');
    }

    xbr.onreadystatechange = function(){
        console.log('ready state is', xbr.readyState);
    }

    xbr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);

        }
        else{
            console.log('Error');
        }
    }
    // param =  {
    //     title: 'test product',
    //     price: 13.5,
    //     description: 'lorem ipsum set',
    //     image: 'https://i.pravatar.cc',
    //     category: 'electronic'
    // };
    // xbr.send(param);
    xbr.send();
}


let popBtn = document.getElementById('populate');
popBtn.addEventListener('click',popluateAll);

function popluateAll(){
    console.log('You have clicked pop button');

    const xbr = new XMLHttpRequest();

    //Open the object
    //true for async hona chahiye
    xbr.open('GET','https://fakestoreapi.com/users',true);


    xbr.onload = function(){
        if(this.status == 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str="";
            for(key in obj){
                str += `<li>${obj[key].username}</li>`;
            }
            list.innerHTML = str; 

        }
        else{
            console.log('Error');
        }
    }

    xbr.send();

}


