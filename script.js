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
const form = document.querySelector("form");
console.log(status);

let myLibrary = [
  // new book objects will be stored in this array
];

class Book {
  constructor(author, title, totalPages, status) {
    this.author = author;
    this.title = title;
    this.totalPages = totalPages;
    this.status = status;
  }
}

function addBookToLibrary(event) {
  // prevent the submit button's default action
  // of sending form data to a server

  modal.classList.remove("active");
  overlay.classList.remove("active");

  // get values from the form elements
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
    let remove = document.createElement("button");
    let toggleStatus = document.createElement("button");
    // give remove and toggleStatus btn a class for styling
    remove.classList.add("remove");
    toggleStatus.classList.add("toggle");

    books.appendChild(title);
    books.appendChild(author);
    books.appendChild(pages);
    books.appendChild(status);
    books.appendChild(remove);
    books.appendChild(toggleStatus);
    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.totalPages}`;
    status.textContent = `Status: ${book.status}`;
    remove.textContent = "Remove";
    toggleStatus.textContent = "Status";

    remove.addEventListener("click", (e) => {
      let index = e.currentTarget.parentNode.id;
      myLibrary.splice(index, 1);
      e.currentTarget.parentNode.remove();
    });

    let statusArray = ["read", "not read", "ongoing"];
    let statusIndex = 0;
    toggleStatus.addEventListener("click", () => {
      statusValue = statusArray[statusIndex++ % statusArray.length];
      status.textContent = `Status: ${statusValue}`;
    });
  }
}

openModal.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.reportValidity()) {
    content.textContent = "";
    addBookToLibrary();
  } else {
  }
});

// add client side form validation
title.addEventListener("input", () => {
  // console.log(title.validity);
  if (title.validity.patternMismatch) {
    title.setCustomValidity("Please enter only alphabets");
  } else {
    title.setCustomValidity("");
  }
});

author.addEventListener("input", () => {
  // console.log(title.validity);
  if (author.validity.patternMismatch) {
    author.setCustomValidity("Please enter only alphabets");
  } else {
    author.setCustomValidity("");
  }
});
