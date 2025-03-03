const { calculate, filter } = require('./task2');

const result1 = calculate(10, 5, '+');
console.log(`10 + 5 = ${result1}`);

const result2 = calculate(10, 5, '-');
console.log(`10 - 5 = ${result2}`);

const result3 = calculate(10, 5, '*');
console.log(`10 * 5 = ${result3}`);

const result4 = calculate(10, 0, '/');
console.log(`10 / 0 = ${result4}`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);
