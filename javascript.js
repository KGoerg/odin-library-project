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
console.log(addBookToLibrary("ldj", "sdf", 45, "read"));
console.log(addBookToLibrary("slidjf", "slfj", 342, "not read"));

//Checks to make sure myLibrary array is returned with the book objects pushed to it
console.log(myLibrary);

function loopMyLibrary() {
    for (let book of myLibrary) {
        console.log(book);
    }
}

loopMyLibrary();