console.log("this is tutorial 31 on ES6");

class Library{
    constructor(booklist=[]){
        this.booklist = booklist;
    }

    getBookList(){
        this.booklist.forEach(function(element){
            console.log(element);
        });
    }

    issueBook(bookname,user){
        if(this.booklist.includes(bookname)){
            console.log(`this book can be issued`);
            
        }
    }


}