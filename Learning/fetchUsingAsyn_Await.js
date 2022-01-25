console.log('Asyn/await');

async function getData(){
    console.log('Inside getData function');
    const response = await fetch('https://fakestoreapi.com/products');
    console.log('Fetched product');
    const products = await response.json();
    console.log('Product resolved');
    return products;
}

getData().then(data=> console.log(data));