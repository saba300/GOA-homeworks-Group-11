const util = require('util');
const fs = require('fs');

const name = "Saba";
const age = 17;
const message = util.format(name, age);
console.log(message);  

const isDate = util.types.isDate(new Date());
console.log("ეს არის თარიღი?", isDate); // true

const readFilePromise = util.promisify(fs.readFile);
readFilePromise(__filename, "utf8")
  .then(data => console.log(data.length))
  .catch(err => console.error(err));

const user = { name: "Ana", age: 28, location: { country: "Georgia", city: "Tbilisi" } };
console.log(util.inspect(user, { showHidden: false, depth: 2, colors: true }));

const oldFunction = util.deprecate(() => {
  console.log("ეს ფუნქცია მოძველებულია და არ უნდა გამოიყენო!");
}, "oldFunction() is deprecated");

oldFunction();
