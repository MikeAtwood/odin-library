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
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead() {
        this.read = !this.read;
    }
}


// This takes Book constructor
// Allows modal to create a new card to display on page
    function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = false;
    const newBook = new Book(title, author, pages, read);
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
        pagesElement.textContent = "Pages: " + book.pages;
        const readBtn = document.createElement('button')
        readBtn.textContent = book.read ? "Read" : "Not Read";
        readBtn.classList.add(book.read ? "read" : "not-read");
        readBtn.addEventListener("click", () => {
            book.toggleRead();
            renderBooks();
        });
        
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(pagesElement);
        bookElement.appendChild(readBtn);
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


//-------- Login function --------//
const loginButton = document.getElementById('login')
const loginModal = document.querySelector('#login-modal')
const closeButton = loginModal.querySelector('.close')
const userName = document.getElementById('username')
const passwordInput = document.getElementById('password')
const loginForm = document.querySelector("#login-form")

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block'
})

closeButton.addEventListener("click", () => {
    loginModal.style.display = 'none'
})

loginForm.addEventListener('submit', (event) => {
    const usernameValue = userName.value.trim();
    const passwordValue = passwordInput.value.trim();
    const hasNumber = /\d/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*]/.test(passwordValue);
  
    if (usernameValue.length < 5 && usernameValue.length > 15) {
      event.preventDefault();
      userName.setCustomValidity('Username must be between 5 and 15 characters');
      userName.reportValidity();
    } else if (passwordValue.length < 8 && !hasNumber && !hasSpecialChar) {
      event.preventDefault();
      passwordInput.setCustomValidity('Password must contain at least 8 characters, one numerical character, and one special character');
      passwordInput.reportValidity();
    } else {
        event.preventDefault()
        loginModal.style.display = 'none'
        window.location.href = '/index.html'
    }
  });
