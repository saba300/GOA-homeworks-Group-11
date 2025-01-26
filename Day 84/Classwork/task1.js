let database = [];

function Account(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    if (firstName && lastName && email) {
        let newAccount = new Account(firstName, lastName, email);
        database.push(newAccount);

        console.log(database);

        alert('Registration successful!');
    } else {
        alert('Please fill in all fields!');
    }
});
