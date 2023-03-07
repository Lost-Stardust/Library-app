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
console.log(myLibrary);
