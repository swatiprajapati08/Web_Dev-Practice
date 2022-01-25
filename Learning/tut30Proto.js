console.log("tut 30 on Prototype");

const proto ={
    slogan: function(){
        return "This is best company";
    },
    changeCompany : function(newComp){
        this.company = newComp;
    }
}

let swati = Object.create(proto);
swati.name="swati";
swati.company = "tcs";
swati.changeCompany("amazon");
console.log(swati);

//other way of creating object
let swati2 = Object.create(proto,{
    name:{value:"swati"},
    company:{value:"amazon",writable:true}
});
swati2.changeCompany("Google");
console.log(swati2);

//Employee constructor
function Employee(name,salary,exp){
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}

//slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regards , ${this.name}`;
}

let swatiObj = new Employee("swati",110000,1);
console.log(swatiObj.slogan());

//programmer

function Programmer(name,salary,exp,language){
    Employee.call(this,name,salary,exp);
    this.language = language;
}

let swatiPro = new Programmer("swati",200000,1,"javascript");
console.log(swatiPro);

//inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("rohan",20000,0,"java");
console.log(rohan);