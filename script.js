let myLibrary = [];

const newBook = document.querySelector(".new-book")
const myModal = document.querySelector("#myModal")
const MyBtn = document.querySelector("#myBtn")
const AddBtn = document.querySelector("#add-btn")

MyBtn.onclick = () => myModal.style.display = "block";
AddBtn.onclick = () => addBookToLibrary.style.display = "block"


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
    myLibrary.push(Book)
}

const theHobbit = new Book(
    this.author = "J.R.R Tolkien",
    this.title = "The Hobbit",
    this.pages = 304
)
console.dir(theHobbit)