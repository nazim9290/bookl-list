//oop model

//get element
var form = document.querySelector("#bookform");
form.addEventListener("submit", addBook);

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//add eventlistener


//show book
class Ui {
    constructor() {

    }
    //class fuction constructor ar baire call korte hoy
    addtoBook(book) {
        let list = document.querySelector("#book-list");
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delet">x</a></td>`;

        list.appendChild(row)
    }

}

function addBook(e) {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;
    // class objecter vitor value passs
    let book = new Book(title, author, isbn);
    //notun value show tai ui class call
    let ui = new Ui();
    //ui ar addtoBook  function ke call
    ui.addtoBook(book);

    e.preventDefault();
}