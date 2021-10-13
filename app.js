let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

const cardContainer = document.querySelector('#cardContainer');


// bookTitle = window.prompt("Enter the title of the book:");
// bookAuthor = window.prompt("Enter the author of the book:");
// bookPages = window.prompt("Enter the number of pages for the book:");
// bookRead = window.prompt("Have you read the book?:");

function Book(title, author, numOfPages, haveRead){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.haveRead = haveRead
    this.info = function() {
        console.log(title + " by " + author + ", " + numOfPages + ", " + haveRead)
    }
}
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Yes");
const book2 = new Book("Game of Thrones", "George R.R. Martin", "694", "Yes");
const book3 = new Book("The Name of the Wind", "Patrick Rothfuss", "662", "Yes");

// function createBook(title, author, numOfPages, haveRead){
//     const book = new Book(title, author, numOfPages, haveRead);
// }

function addBookToLibrary(){

    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    // console.log(book1.info());

}

function displayBookFromLibrary(){
    


    myLibrary.forEach(function(item, index, array){
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("id", "bookDiv");
        console.table(item);
        bookDiv.textContent += '"' + item.title + '"' + "\r\n" + item.author + "\r\nPages: " + item.numOfPages + "\r\nHave read?: " + item.haveRead + "\r\n";
       
        cardContainer.appendChild(bookDiv);
    });
    
}


// createBook(title, author,numOfPages, haveRead);
addBookToLibrary();
displayBookFromLibrary();
// console.log(myLibrary);