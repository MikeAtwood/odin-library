let myLibrary = [];

const newBook = document.querySelector(".new-book")

$(document).ready(function(){
    $("#myModal").modal()
});

class Book {
    // the constructor
    constructor(author, title, pages){
        this.author = author
        this.title = title
        this.pages = pages
    }
}


function addBookToLibrary() {
    // do stuff here
}