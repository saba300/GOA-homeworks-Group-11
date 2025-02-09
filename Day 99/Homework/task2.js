class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log("Insufficient funds or invalid amount");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(`Current Balance: $${account.getBalance()}`);
