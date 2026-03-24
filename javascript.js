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
console.log(addBookToLibrary("The Giver", "Lois Lowry", 225, "read"));
console.log(addBookToLibrary("The Golden Compass", "Phillip Pullman", 416, "read"));
console.log(addBookToLibrary("The Midnight Library", "Matt Haig", 288, "read"));
console.log(addBookToLibrary("The Time Traveler's Wife", "Audrey Niffenegger", 518, "not yet read"));

//Checks to make sure myLibrary array is returned with the book objects pushed to it
console.log(myLibrary);

//Loops through array
function loopMyLibrary() {
    for (let book of myLibrary) {
        console.log(book);
    }
}

loopMyLibrary();

//DOM Elements

const cardContainer = document.querySelector(".card-container");

const card = document.createElement("div");
card.classList.add("book-card");
card.textContent = "Test";
cardContainer.appendChild(card);