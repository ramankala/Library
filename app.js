let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

function Book(title, author, numOfPages, haveRead){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.haveRead = haveRead
    this.info = function() {
        console.log(title + " by " + author + ", " + numOfPages + ", " + haveRead)
    }
}

function addBookToLibrary(){

    bookTitle = window.prompt("Enter the title of the book:");
    bookAuthor = window.prompt("Enter the author of the book:");
    bookPages = window.prompt("Enter the number of pages for the book:");
    bookRead = window.prompt("Have you read the book?:");


    const book1 = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book1);
    // console.log(book1.info());

}
addBookToLibrary();
console.log(myLibrary);