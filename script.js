// ------ Selectors ------
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

function Book(author, title, totalPages, read) {
  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();
  modal.classList.remove("active");
  overlay.classList.remove("active");

  let authorValue = author.value;
  let titleValue = title.value;
  let pagesValue = pages.value;

  let statusValue;
  for (let i = 0; i < status.length; i++) {
    if (status[i].checked) {
      console.log(status[i].value);
      return;
    }
  }

  const book = new Book(authorValue, titleValue, pagesValue, statusValue);
  console.log(myLibrary.push(book));
  console.log(myLibrary);
}

openModal.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

submit.addEventListener("click", addBookToLibrary);

const book = new Book("kentaro miyura", "berserk", "9500", "yes");
myLibrary.push(book);

const book2 = new Book("Takehiko Inoue", "Vagabond", "728", "yes");
myLibrary.push(book2);

const book3 = new Book("James Clear", "Atomic Habits", "320", "on going");
myLibrary.push(book3);

console.log(myLibrary);

const content = document.querySelector(".content");
console.log(content);
// for (i = 0; i < myLibrary.length; i++) {
//   let books = document.createElement("div");
//   books.classList.add("book");
//   content.appendChild(books);
// }

myLibrary.forEach((book) => {
  let books = document.createElement("div");
  books.classList.add("book");
  content.appendChild(books);
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let read = document.createElement("p");
  books.appendChild(title);
  books.appendChild(author);
  books.appendChild(pages);
  books.appendChild(read);
  title.textContent = `TITLE: ${book.title}`;
  author.textContent = `AUTHOR: ${book.author}`;
  pages.textContent = `PAGES: ${book.totalPages}`;
  read.textContent = `READ: ${book.read}`;
});
