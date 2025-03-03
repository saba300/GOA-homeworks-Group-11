class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }

    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available for borrowing.`);
        }
    }

    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}
