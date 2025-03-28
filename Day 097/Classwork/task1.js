class Account {
    constructor(firstName, lastName, email, password, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.city = city;
    }
  
    printDetails() {
      console.log(`Account Details:
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Email: ${this.email}
        City: ${this.city}`);
    }
}
  
  const accounts = [];
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;
  
    const newAccount = new Account(firstName, lastName, email, password, city);
    accounts.push(newAccount);
  
    newAccount.printDetails();
  
    displayAccountDetails(newAccount);
});
  
  function displayAccountDetails(account) {
    const accountDiv = document.getElementById('accountDetails');
    const accountInfo = `
      <p>Account Created:</p>
      <ul>
        <li>First Name: ${account.firstName}</li>
        <li>Last Name: ${account.lastName}</li>
        <li>Email: ${account.email}</li>
        <li>City: ${account.city}</li>
      </ul>
    `;
    accountDiv.innerHTML = accountInfo;
}
  