class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    static compareUsers(user1, user2) {
        return user1.email === user2.email;
    }
}

const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");
const user3 = new User("John Doe", "john.doe@example.com");

console.log(User.compareUsers(user1, user2)); 
console.log(User.compareUsers(user1, user3)); 
