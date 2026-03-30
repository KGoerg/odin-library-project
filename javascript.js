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
// addBookToLibrary("The Time Traveler's Wife", "Audrey Niffenegger", 518, "not yet read");
// addBookToLibrary("A Court of Thorns and Roses", "Sarah J Maas", 448, "read");

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
        //Adds current book text to card. If book text already exists, sets text to "" and adds current array item as text.
        card.textContent = text += `${book.title} by ${book.author}, ${book.pages} pages, Status: ${book.read}. `;
        if (text != "") {
          text = "";
          card.textContent = text += `${book.title} by ${book.author}, ${book.pages} pages, Status: ${book.read}. `;
        }
        //Appends card to container parent
        cardContainer.appendChild(card);
    }
}

createPlaceholderBooks();

function createNewBook() {
  let newBook = myLibrary.slice(-1)[0];
  let text = "";
  let card = document.createElement("div");
  //Adds class to card
  card.classList.add("book-card");
  //Adds current book text to card. If book text already exists, sets text to "" and adds current array item as text.
  card.textContent = text += `${newBook.title} by ${newBook.author}, ${newBook.pages} pages, Status: ${newBook.read}. `;
  if (text != "") {
    text = "";
    card.textContent = text += `${newBook.title} by ${newBook.author}, ${newBook.pages} pages, Status: ${newBook.read}. `;
  }
  //Appends card to container parent
  cardContainer.appendChild(card);
}

//Resets the form field after submitting
const form = document.querySelector("form");
form.addEventListener("submit", function() {
  form.reset();
});

let formTitle = "";
let formAuthor = "";
let formPages;
let formRead = "";

const submitButton = document.querySelector('button[type="submit"]').addEventListener("click", function(event) {
  formTitle = document.getElementById("book_title").value;
  console.log(formTitle);
  formAuthor = document.getElementById("author_name").value;
  console.log(formAuthor);
  formPages = document.getElementById("number_pages").value;
  console.log(formPages);
  formRead = document.getElementById("read_status").value;
  console.log(formRead);
  addBookToLibrary(formTitle, formAuthor, formPages, "read");
  createNewBook();
  console.log(myLibrary);
})