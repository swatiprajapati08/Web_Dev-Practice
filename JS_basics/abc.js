//HOF high order function
// Function which take functions as a parameter

//Callback function
// function which are passed as a parameter in another function


function getName(name){
    name=name.split(" ");
  return name[0];
}

function getLast(name){
    name=name.split(" ");
    return name[1];
}

function fun(name,sayHi){
    let a=sayHi(name);
    console.log(a);
}

fun("swati prajapati",getName);  // getname and getlast are callback function IMPortant
fun("swati prajapati",getLast);

