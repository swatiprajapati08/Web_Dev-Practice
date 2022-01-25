console.log('notes app');
showNotes();

//if user adds a notes, add it to local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    if (addTxt.textLength == 0 || addTitle.textLength ==0 ) {
        alert("please write something in text box");
    }
    else {
        let notes = localStorage.getItem("notes");
        console.log(notes);
        //if notes have some then take it in aaray
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        //add new value
        notesObj.push({title: addTitle.value , note:addTxt.value });
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        addTitle.value = "";
        console.log(notesObj);
        showNotes();
    }
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    let html = "";
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.forEach(function (element, index) {
        html += ` 
        <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.note}</p>
            <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0)
        notesElm.innerHTML = html;
    else {
        notesElm.innerHTML = `Nothing to show ! Use "Add a Notes" section above to add notes.`
    }

}

//function to delete a note
function deleteNote(index) {
    console.log('i m deleting', index);
    let notes = localStorage.getItem("notes");
    let html = "";
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    //delete notes
    notesObj.splice(index, 1);
    //updating the local storage
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let titleTxt = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal) || titleTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})