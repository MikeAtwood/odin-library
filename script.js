// Array to hold Card Objects
const myLibrary = [];

const newBook = document.querySelector(".new-book");
const myModal = document.querySelector("#myModal");
const MyBtn = document.querySelector("#myBtn");
const bookForm = document.getElementById('book-form')

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
    addBook();
    renderBooks();
    closeModal();
    bookForm.reset();
})

const closeBtn = document.getElementById('close-btn')
closeBtn.addEventListener('click', () => {
    closeModal()
})

const newBookBtn = document.getElementById('new-book')
newBookBtn.addEventListener('click', () => {
    showModal();
})


// Constructor
class Book {
    constructor(author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
    }
}

// This takes Book constructor
// Allows modal to create a new card to display on page
    function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
};

// Function to render all the card objects on the page
function renderBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.textContent = '';
    myLibrary.forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;
        const authorElement = document.createElement('p');
        authorElement.textContent = book.author;
        const pagesElement = document.createElement('p');
        pagesElement.textContent = book.pages;

        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(pagesElement);
        console.log(bookElement)
        bookContainer.appendChild(bookElement);
    });
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function showModal() {
    const modal = document.getElementById('modal')
    modal.style.display = 'block';
}