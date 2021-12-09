let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

const cardContainer = document.querySelector('#cardContainer');
const addBookBtn = document.querySelector('#addBook');


class Book{
    
    constructor(title, author, numOfPages, haveRead){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.haveRead = haveRead
    this.info = function() {
        console.log(title + " by " + author + ", " + numOfPages + ", " + haveRead)
        }
    }

    createBook(title, author, numOfPages, haveRead){

        title = window.prompt("Enter the title of the book:");
        author = window.prompt("Enter the author of the book:");
        numOfPages = window.prompt("Enter the number of pages for the book:");
        haveRead = window.prompt("Have you read the book?(Y/N):");
        haveRead = haveRead.toLowerCase();

        if ((title == "" || title == null) || (author == "" || author == null) || (numOfPages == "" || numOfPages == null) || (haveRead == "" || haveRead == null)){

        }
        else{
            const book = new Book(title, author, numOfPages, haveRead);

            return book;

        }
    }

    addBookToLibrary(book){

        myLibrary.push(book);

    }

    removeBook(pos){
        myLibrary.splice(pos, 1);
    
    }

    displayBookFromLibrary(){
    
        let bookDiv;
        let removeBookBtn;
        let changeReadBtn;
        let buttonContainer;

        myLibrary.forEach(function(item, index, array){

            bookDiv = document.createElement("div");
            bookDiv.setAttribute("id", "bookDiv");
            bookDiv.setAttribute("data-index-number", index);

            bookDiv.textContent += '"' + item.title + '"' + "\r\n" + item.author + "\r\nPages: " + item.numOfPages;

            removeBookBtn = document.createElement("button");
            removeBookBtn.setAttribute("id", "removeBookBtn");
            removeBookBtn.textContent = "Remove";

            changeReadBtn = document.createElement("button");
            changeReadBtn.setAttribute("id", "changeReadBtn");

            if (item.haveRead == "y"){
                item.haveRead = 'Read';
                changeReadBtn.textContent = "Read";
                changeReadBtn.classList.toggle('haveRead');
            }
            else {
                item.haveRead = 'Not Read';
                changeReadBtn.textContent = "Not Read";
                changeReadBtn.classList.toggle('notRead');
            }

            removeBookBtn.addEventListener('click', function(){
                let pos;
                let book = new Book();

                pos = bookDiv.getAttribute("data-index-number");
                book.removeBook(pos);
                cardContainer.removeChild(bookDiv);
                
            });

            changeReadBtn.addEventListener('click', function(e){


                if (e.target.className == 'haveRead') {
                    item.haveRead = "Not Read";
                    e.target.textContent = 'Not Read';
                    e.target.classList.toggle('haveRead');
                    e.target.classList.toggle('notRead');

                }
                else if (e.target.className == 'notRead'){
                    item.haveRead = "Read";
                    e.target.textContent = 'Read';
                    e.target.classList.toggle('notRead');
                    e.target.classList.toggle('haveRead');

                }

            });
        });

    buttonContainer = document.createElement('div');
    buttonContainer.setAttribute("id", "buttonContainer");
    buttonContainer.appendChild(changeReadBtn);
    buttonContainer.appendChild(removeBookBtn);
    bookDiv.appendChild(buttonContainer);
    cardContainer.appendChild(bookDiv);
    
    
    }

    createLibrary(){


    }

}


addBookBtn.addEventListener('click', function(){

    let book = new Book();
    let newEntry;

    newEntry = book.createBook();
    book.addBookToLibrary(newEntry);
    book.displayBookFromLibrary();
});