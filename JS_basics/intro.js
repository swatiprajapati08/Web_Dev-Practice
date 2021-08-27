console.log("Hello world");

//datatypes=> number, boolean , undefined , null, string , object

// ES6  syntax=> let ,const

// let=>blocked scoped variable 
// const => blocked scoped variable ,can't reinitialization

let hi; //by default undefined hoga
let object={
    id:"1",
    name: "Swati",
    roll_no:27,
};
console.log(object);

// dot method => literally check with parameter

console.log(object.name);


let key="roll_no";
//console.log(object.key);  => because vo map k andar key name ka variable search kr rha  if we want to 
// do something like this then we have bracket method

console.log(object[key]);



//== && ===(data type also check)
// 15 == "15" => true (only focus on value)
// 15 ==="15" =>  false (focus on data type)



//-------------------------------------------------------------------------------
//FUNCTION



//function ody

function sayHi(name){
console.log( name+" from SwatiP JSSS")
}


//function call


console.log(sayHi("steve"));  //  steve from SwatiP JSSS + undefined (bcz function is not returning anything)

// work like this  =>  let val= sayHi("steve");  console.log(val);



//function are variable

let fun= function(){   //anaymous function
    console.log("Hye from fun");
}

//fun();


//variable can be passed as a parameter
// functions can also be passed as a parameter


