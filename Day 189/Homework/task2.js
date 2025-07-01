const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const dirPath = path.join(__dirname, 'myDirectory');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log('დირექტორია შექმნილია სინქრონულად');
}

async function createHelloFile() {
  try {
    const filePath = path.join(dirPath, 'hello.txt');
    await fsp.writeFile(filePath, 'Hello, Node.js!');
    console.log('ფაილი hello.txt წარმატებით შეიქმნა');
  } catch (err) {
    console.error('შეცდომა:', err);
  }
}

createHelloFile();
