const myLibrary = [];

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
addBookToLibrary("The Midnight Library", "Matt Haig", 288, "read");
addBookToLibrary("The Time Traveler's Wife", "Audrey Niffenegger", 518, "not yet read");

//Checks to make sure myLibrary array is returned with the book objects pushed to it
console.log(myLibrary);

//Loops through array
function loopMyLibrary() {
  let text = "";
    for (let book of myLibrary) {
        text += `${book.title} by ${book.author}, ${book.pages} pages, Status: ${book.read}. `;
    }
    return text;
}

console.log(loopMyLibrary());

//DOM Elements

const cardContainer = document.querySelector(".card-container");

const card = document.createElement("div");
card.classList.add("book-card");
card.textContent = "Test";
cardContainer.appendChild(card);