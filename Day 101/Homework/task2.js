class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

user1.displayInfo();
user2.displayInfo();
