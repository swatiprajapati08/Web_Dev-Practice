console.log('Fetch api');

let fetchBtn = document.getElementById("fetchBtn");
let postBtn = document.getElementById("postBtn")
fetchBtn.addEventListener('click',getData);
postBtn.addEventListener('click',postData);

// function getData(){
//     console.log('Started getData');
//     url ="https://fakestoreapi.com/products/categories"
//     fetch(url).then(response =>{
//         return response.json();
//     }).then(data =>{
//         console.log(data);
//     })
// }

function getData(){
    console.log('Started getData');
    url ="https://fakestoreapi.com/products/categories"
    fetch(url).then(response => response.json())
    .then(data =>console.log(data))
}

function postData(){
    url= 'https://fakestoreapi.com/products';
    data =  {
        title: 'test',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    param ={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url,param).then(response => response.json()).then(data=>console.log(data));

}