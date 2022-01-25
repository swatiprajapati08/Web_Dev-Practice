console.log("library js");
//showBooks();
//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display Constructor
function Display() {

}




//add method to display prototype

Display.prototype.add = function (book) {
//     let books = localStorage.getItem("books");

//     if(books == null)
//     bookArr = [];
//     else
//     bookArr = JSON.parse(books);

//    // console.log("Adding in UI");
//     let bookObj = {name:book.name,title:book.title,type:book.type};
//     console.log("Adding in UI",bookObj);
//     bookArr.push(bookObj);

//     localStorage.setItem("books",JSON.stringify(bookArr));
    
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
    tableBody.innerHTML += uiString;
    //showBooks();
    
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2)
        return false;
    else
        return true;
}

Display.prototype.show = function (type) {
    message = document.getElementById('message');
    if (type == 'success')
        message.innerHTML = `<div class="alert alert-dismissible fade show alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
     Success!!, Your book has been successfully added.
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    else
        message.innerHTML = `<div class="alert alert-dismissible fade show alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
            Error, You can't add this book.
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);

}



//add submit event listener to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSumbit);

function libraryFormSumbit(e) {

    console.log("You have submitted the form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success');
    }
    else {
        display.show('error');
    }


    e.preventDefault();
}


function showBooks(){
    let books = localStorage.getItem("books");

    if(books == null)
    bookArr = [];
    else
    bookArr = JSON.parse(books);


    console.log("book",books);
    uiString ="";

    Array.from(bookArr).forEach(book => {
      uiString += `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
    });

    tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = uiString;
}
