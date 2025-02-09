class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }

    addContact(name, phone) {
        this.contacts.set(phone, name);
    }

    getContact(phone) {
        return this.contacts.get(phone);
    }
}

const phoneBook = new PhoneBook();
phoneBook.addContact("John Doe", "123-456-7890");
phoneBook.addContact("Jane Smith", "987-654-3210");

console.log(phoneBook.getContact("123-456-7890"));
console.log(phoneBook.getContact("987-654-3210")); 
