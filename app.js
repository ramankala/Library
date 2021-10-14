let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

const cardContainer = document.querySelector('#cardContainer');
const addBookBtn = document.querySelector('#addBook');


function Book(title, author, numOfPages, haveRead){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.haveRead = haveRead
    this.info = function() {
        console.log(title + " by " + author + ", " + numOfPages + ", " + haveRead)
    }
}
// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Yes");
// const book2 = new Book("Game of Thrones", "George R.R. Martin", "694", "Yes");
// const book3 = new Book("The Name of the Wind", "Patrick Rothfuss", "662", "Yes");

function createBook(title, author, numOfPages, haveRead){

    title = window.prompt("Enter the title of the book:");
    author = window.prompt("Enter the author of the book:");
    numOfPages = window.prompt("Enter the number of pages for the book:");
    haveRead = window.prompt("Have you read the book?:");

    const book = new Book(title, author, numOfPages, haveRead);

    return book;
}

function addBookToLibrary(book){

    myLibrary.push(book);
    // console.log(book1.info());

}

function removeBook(pos){
    console.log(myLibrary);
    myLibrary.splice(pos, 1);
    console.log(myLibrary);
    
}

function displayBookFromLibrary(){
    
    let bookDiv;
    let removeBookBtn;

    myLibrary.forEach(function(item, index, array){
        bookDiv = document.createElement("div");
        bookDiv.setAttribute("id", "bookDiv");
        bookDiv.setAttribute("data-index-number", index);
        console.log(bookDiv.attributes);
        console.table(item);
        bookDiv.textContent += '"' + item.title + '"' + "\r\n" + item.author + "\r\nPages: " + item.numOfPages + "\r\nHave read?: " + item.haveRead + "\r\n";
        removeBookBtn = document.createElement("button");
        removeBookBtn.setAttribute("id", "removeBookBtn");
        removeBookBtn.textContent = "Remove";

        removeBookBtn.addEventListener('click', function(){
            let pos;
            console.log(bookDiv.hasAttribute("data-index-number"));
            pos = bookDiv.getAttribute("data-index-number");
            console.log(pos);
            removeBook(pos);
            
        });
    });
    cardContainer.appendChild(bookDiv);
    cardContainer.appendChild(removeBookBtn);
    
}


addBookBtn.addEventListener('click', function(){

    let book = createBook();
    addBookToLibrary(book);
    displayBookFromLibrary();
});




// createBook(title, author,numOfPages, haveRead);
// console.log(myLibrary);