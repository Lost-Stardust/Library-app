const button = document.querySelector("button");
console.log(button);

let myLibrary = [
  // new book objects will be stored in this array
];

function Book(author, title, totalPages, read) {
  this.author = author;
  this.title = title;
  this.totalPages = totalPages;
  this.read = read;
}

function addBookToLibrary() {
  let author = prompt("Who is the author?");
  let title = prompt("What is the title?");
  let totalPages = prompt("How many pages does it have?");
  let read = prompt("Have you read it?");
  const book = new Book(author, title, totalPages, read);
  console.log(myLibrary.push(book));
  console.log(myLibrary);
}

button.addEventListener("click", () => {
  addBookToLibrary();
});

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
  let text = `TITLE: ${book.title} 
  AUTHOR: ${book.author} 
  PAGES: ${book.totalPages} 
  READ: ${book.read}`;
  books.textContent = text;
});

let text = `hello world`;
console.log(text);
