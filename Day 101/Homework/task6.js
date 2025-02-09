class Library {
    constructor() {
        this.books = new Map();
    }

    addBook(title, author) {
        this.books.set(title, author);
    }
}

const library = new Library();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("1984", "George Orwell");

console.log(library.books);
