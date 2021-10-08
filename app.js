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

    const book2 = new Book("bob", "dole", "200", "no");
    const book3 = new Book("tea", "house", "300", "no");

    myLibrary.push(book2);
    myLibrary.push(book3);

    bookTitle = window.prompt("Enter the title of the book:");
    bookAuthor = window.prompt("Enter the author of the book:");
    bookPages = window.prompt("Enter the number of pages for the book:");
    bookRead = window.prompt("Have you read the book?:");


    const book1 = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book1);
    displayBookFromLibrary();
    // console.log(book1.info());

}

function displayBookFromLibrary(){
    myLibrary.forEach(function(item, index, array){
        console.log(item);
    })
}
addBookToLibrary();
// console.log(myLibrary);