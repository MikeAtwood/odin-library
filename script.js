let myLibrary = [];

const newBook = document.querySelector(".new-book")
const myModal = document.querySelector("#myModal")
const MyBtn = document.querySelector("#myBtn")

MyBtn.onclick = () => myModal.style.display = "block";

// constructor
class Book { 
    constructor(author, title, pages){
        this.author = author
        this.title = title
        this.pages = pages
    }
}

// This takes Book constructor
// Allows modal to create a new card to display on page

function addBookToLibrary() {
    // do stuff here
}