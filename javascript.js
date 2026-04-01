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

//Checks to make sure addBookToLibrary is creating new books and pushing them to myLibrary array
addBookToLibrary("The Giver", "Lois Lowry", 225, "read");
addBookToLibrary("The Golden Compass", "Phillip Pullman", 416, "read");
// addBookToLibrary("The Midnight Library", "Matt Haig", 288, "read");

//Checks to make sure myLibrary array is returned with the book objects pushed to it
console.log(myLibrary);

const cardContainer = document.querySelector(".card-container");

//Loops through array and displays Placeholder book info in the DOM
function createPlaceholderBooks() {
  let text = "";
    for (let book of myLibrary) {
      //Creates card
        let card = document.createElement("div");
        //Adds class to card
        card.classList.add("book-card");
        let titleParagraph = document.createElement("p");
        let authorParagraph = document.createElement("p");
        let pagesParagraph = document.createElement("p");
        let readParagraph = document.createElement("p");
        titleParagraph.classList.add("card-paragraph");
        authorParagraph.classList.add("card-paragraph");
        pagesParagraph.classList.add("card-paragraph");
        readParagraph.classList.add("card-paragraph");

        titleParagraph.textContent = `Book Title: ${book.title}`;
        authorParagraph.textContent = `Author: ${book.author}`; 
        pagesParagraph.textContent = `Pages: ${book.pages}`;
        readParagraph.textContent = `Status: ${book.read}`;
        if (text != "") {
          text = "";
          titleParagraph.textContent = text += `Book Title: ${book.title}`;
          authorParagraph.textContent = text += `Author: ${book.author}`; 
          pagesParagraph.textContent = text+= `Pages: ${book.pages}`;
          readParagraph.textContent = text += `Status: ${book.read}. `;
        }
        //Creates Toggle Read and Remove Book buttons
        let readStatusButton = document.createElement("button");
        let removeBookButton = document.createElement("button");
        readStatusButton.classList.add("read-button");
        readStatusButton.textContent="Toggle Read";
        removeBookButton.classList.add("remove-button");
        removeBookButton.textContent="Remove Book";

        //Allows buttons to do things
        readStatusButton.addEventListener("click", () => {
          book.read === "read" ? book.read = "unread" : book.read = "read";
          readParagraph.textContent = `Status: ${book.read}`;
        })

        //Appends card to container parent
        cardContainer.appendChild(card);
        card.appendChild(titleParagraph);
        card.appendChild(authorParagraph);
        card.appendChild(pagesParagraph);
        card.appendChild(readParagraph);
        card.appendChild(readStatusButton);
        card.appendChild(removeBookButton);
    }
  
}

createPlaceholderBooks();

function createNewBook() {
  let newBook = myLibrary.slice(-1)[0];
  let text = "";
  let card = document.createElement("div");
  //Adds class to card
  card.classList.add("book-card");
  let titleParagraph = document.createElement("p");
  let authorParagraph = document.createElement("p");
  let pagesParagraph = document.createElement("p");
  let readParagraph = document.createElement("p");
  titleParagraph.classList.add("card-paragraph");
  authorParagraph.classList.add("card-paragraph");
  pagesParagraph.classList.add("card-paragraph");
  readParagraph.classList.add("card-paragraph");
  //Adds current book text to card. If book text already exists, sets text to "" and adds current array item as text.
  titleParagraph.textContent = `Book Title: ${newBook.title}`;
  authorParagraph.textContent = `Author: ${newBook.author}`; 
  pagesParagraph.textContent = `Pages: ${newBook.pages}`;
  readParagraph.textContent = `Status: ${newBook.read}`;
  if (text != "") {
    text = "";
    titleParagraph.textContent = text += `Book Title: ${newBook.title}`;
    authorParagraph.textContent = text += `Author: ${newBook.author}`; 
    pagesParagraph.textContent = text+= `Pages: ${newBook.pages}`;
    readParagraph.textContent = text += `Status: ${newBook.read}`;
  }
  //Creates Toggle Read and Remove Book buttons
  let readStatusButton = document.createElement("button");
  let removeBookButton = document.createElement("button");
  readStatusButton.classList.add("read-button");
  readStatusButton.textContent="Toggle Read";
  removeBookButton.classList.add("remove-button");
  removeBookButton.textContent="Remove Book";

//Allows buttons to do things
  readStatusButton.addEventListener("click", () => {
    newBook.read === "read" ? newBook.read = "unread" : newBook.read = "read";
    readParagraph.textContent = `Status: ${newBook.read}`;
  })

  //Appends card to container parent
  cardContainer.appendChild(card);
  card.appendChild(titleParagraph);
  card.appendChild(authorParagraph);
  card.appendChild(pagesParagraph);
  card.appendChild(readParagraph);
  card.appendChild(readStatusButton);
  card.appendChild(removeBookButton);
    };

//Resets the form field after submitting
const form = document.querySelector("form");
form.addEventListener("submit", function() {
  form.reset();
});

const checkbox = document.querySelector("input[type=checkbox]");

function validateCheckbox() {
  if (checkbox.checked === true) {
    return "read";
  } else {
    return "unread";
  }
}

let formTitle;
let formAuthor;
let formPages;
let formRead;

const submitButton = document.querySelector('button[type="submit"]').addEventListener("click", function(event) {
  formTitle = document.getElementById("book_title").value;
  formAuthor = document.getElementById("author_name").value;
  formPages = document.getElementById("number_pages").value;
  formRead = validateCheckbox();
  addBookToLibrary(formTitle, formAuthor, formPages, formRead);
  createNewBook();
})