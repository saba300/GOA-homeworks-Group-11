class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year);
        this.author = author;
        this.genre = genre;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}. Genre: ${this.genre}.`;
    }
}
