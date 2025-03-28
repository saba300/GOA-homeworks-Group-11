class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);
        this.issueNumber = issueNumber;
    }

    getSummary() {
        return `${this.title} - Issue #${this.issueNumber}, published in ${this.year}.`;
    }
}
