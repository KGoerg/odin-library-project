let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  return myLibrary;
}

const cardContainer = document.querySelector(".card-container");

function createNewBook() {
  let newBook = myLibrary.slice(-1)[0];
  let card = document.createElement("div");
  //Adds class to card
  card.classList.add("book-card");
  card.setAttribute("data-id", newBook.id);
  console.log(card);
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let read = document.createElement("p");
  title.classList.add("card-header");
  author.classList.add("card-header");
  pages.classList.add("card-header");
  read.classList.add("card-header");
  let titleContent = document.createElement("span");
  let authorContent = document.createElement("span");
  let pagesContent = document.createElement("span");
  let readContent = document.createElement("span");
  titleContent.classList.add("card-content");
  authorContent.classList.add("card-content");
  pagesContent.classList.add("card-content");
  readContent.classList.add("card-content");

  //Adds current book text to card.
  title.textContent = "Book Title: "
  author.textContent = "Author: "
  pages.textContent = "Pages: "
  read.textContent = "Status: "

  titleContent.textContent = newBook.title;
  authorContent.textContent = newBook.author;
  pagesContent.textContent = newBook.pages;
  readContent.textContent = newBook.read;

  //Creates Toggle Read and Remove Book buttons
  let readStatusButton = document.createElement("button");
  let removeBookButton = document.createElement("button");
  readStatusButton.classList.add("read-button");
  readStatusButton.textContent="Toggle Status";
  removeBookButton.classList.add("remove-button");
  removeBookButton.textContent="Remove Book";

//Allows card buttons to do things
  readStatusButton.addEventListener("click", () => {
    newBook.read === "Read" ? newBook.read = "Unread" : newBook.read = "Read";
    readContent.textContent = newBook.read;
    console.log(myLibrary);
  })

  removeBookButton.addEventListener("click", () => {
    let currentBookId = newBook.id;
    console.log(currentBookId);
    let currentCardId = card.dataset.id;
    console.log(currentCardId);
    //Gets index of current book card and splices it from the array!
    let index = myLibrary.findIndex(book => book.id === currentBookId);
    console.log(index);
    myLibrary.splice(index, 1);
    console.log(myLibrary);

    if (card.dataset.id === currentBookId) {
      card.parentNode.removeChild(card);
    }
  })

  //Appends card to container parent
  cardContainer.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(readStatusButton);
  card.appendChild(removeBookButton);
  title.appendChild(titleContent);
  author.appendChild(authorContent);
  pages.appendChild(pagesContent);
  read.appendChild(readContent);
};

//Resets the form field after submitting
const form = document.querySelector("form");
form.addEventListener("submit", function() {
  form.reset();
});

const checkbox = document.querySelector("input[type=checkbox]");

function validateCheckbox() {
  if (checkbox.checked === true) {
    return "Read";
  } else {
    return "Unread";
  }
}

const submitButton = document.querySelector('button[type="submit"]').addEventListener("click", function(event) {
  formTitle = document.getElementById("book_title").value;
  formAuthor = document.getElementById("author_name").value;
  formPages = document.getElementById("number_pages").value;
  formRead = validateCheckbox();
  addBookToLibrary(formTitle, formAuthor, formPages, formRead);
  createNewBook();
  console.log(myLibrary);
})