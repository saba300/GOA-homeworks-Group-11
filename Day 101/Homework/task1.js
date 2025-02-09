class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

console.log(user1);
console.log(user2);
