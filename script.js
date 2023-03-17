// ------ Selectors ------
const content = document.querySelector(".content");
const button = document.querySelector("#openModal");
const submit = document.querySelector("#submit");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.getElementsByName("status");
console.log(status);

let myLibrary = [
  // new book objects will be stored in this array
];

function Book(author, title, totalPages, status) {
  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.status = status;
}

function addBookToLibrary(event) {
  // prevent the submit button's default action
  // of sending form data to a server
  event.preventDefault();

  modal.classList.remove("active");
  overlay.classList.remove("active");

  let authorValue = author.value;
  let titleValue = title.value;
  let pagesValue = pages.value;

  let statusValue;
  for (let i = 0; i < status.length; i++) {
    if (status[i].checked) {
      statusValue = status[i].value;
      break;
    }
  }

  const book = new Book(authorValue, titleValue, pagesValue, statusValue);
  console.log(myLibrary.push(book));
  console.log(myLibrary);

  for (const book of myLibrary) {
    let books = document.createElement("div");
    books.dataset.index = myLibrary.indexOf(book);
    books.classList.add("book");
    content.appendChild(books);
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let status = document.createElement("p");
    books.appendChild(title);
    books.appendChild(author);
    books.appendChild(pages);
    books.appendChild(status);
    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.totalPages}`;
    status.textContent = `Status: ${book.status}`;
  }
}

openModal.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

submit.addEventListener("click", () => {
  content.textContent = "";
});

submit.addEventListener("click", addBookToLibrary);
