const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbers = [];

function askNumber() {
  if (numbers.length >= 10) {
    console.log('ჩასმული რიცხვები:', numbers);
    rl.close();
    return;
  }

  rl.question(`შეიყვანეთ რიცხვი (${numbers.length + 1}/10): `, (input) => {
    const number = Number(input);

    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      console.log('გთხოვთ შეიყვანეთ ნამდვილი რიცხვი.');
    }

    askNumber();
  });
}

askNumber();
