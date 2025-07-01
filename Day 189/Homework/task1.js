const fs = require('fs').promises;

async function readAndWriteFile() {
  try {
    const data = await fs.readFile('test.txt', 'utf-8');
    console.log('ფაილის შემცველობა:', data);

    await fs.writeFile('copy.txt', data);
    console.log('მონაცემები წარმატებით დაკოპირდა ფაილში copy.txt');
  } catch (err) {
    console.error('შეცდომა:', err);
  }
}

readAndWriteFile();
