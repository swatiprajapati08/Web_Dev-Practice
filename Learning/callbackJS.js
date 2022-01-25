console.log("Callback");

const students = [
    { name: "Swati", subject: "Javascript"},
     { name: "Harry", subject: "Python" },
];

function addStudent(student,callback){
    setTimeout(() => {
        students.push(student);
        callback();
    }, 2000);
}

function getStudent(){
    setTimeout(() => {
        let str="";
        students.forEach(element => {
            str += `<li>${element.name}</li>`
        });
        document.getElementById('list').innerHTML = str;
    }, 1000);
}

addStudent({name:"Arpit",subject:"Java"},getStudent);
