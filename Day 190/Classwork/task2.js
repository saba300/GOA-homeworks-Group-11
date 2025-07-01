const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  rl.question('რიცხვი (1-დან 10-მდე): ', (input) => {
    const guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      console.log('გთხოვთ, შეიყვანეთ რიცხვი 1-დან 10-მდე.');
    } else if (guess === secretNumber) {
      console.log('გილოცავთ! სწორად გამოიცანით');
      rl.close();
      return;
    } else {
      console.log('არასწორია, .');
    }

    guessNumber();
  });
}

guessNumber();
