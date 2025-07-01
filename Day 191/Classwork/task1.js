const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');

process.stdout.write('შეიყვანეთ ტექსტი ("exit" — გასასვლელად):\n');


process.stdin.on('data', (input) => {
  const text = input.toString().trim();

  if (text.toLowerCase() === 'exit') {
    fs.appendFile(filePath, '\n[მომხმარებელი გამოვიდა]\n', (err) => {
      if (err) {
        console.error('შეცდომა ფაილის ჩაწერისას:', err);
      } else {
        console.log('file saved');
        process.exit(0);
      }
    });
  } else {
    fs.appendFile(filePath, text + '\n', (err) => {
      if (err) {
        console.error('შეცდომა ჩაწერისას:', err);
      }
    });
  }
});
