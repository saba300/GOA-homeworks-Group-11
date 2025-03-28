const calculate = require('./task1');

const result1 = calculate(10, 5, '+');
console.log(`10 + 5 = ${result1}`);

const result2 = calculate(10, 5, '-');
console.log(`10 - 5 = ${result2}`);

const result3 = calculate(10, 5, '*');
console.log(`10 * 5 = ${result3}`);

const result4 = calculate(10, 0, '/');
console.log(`10 / 0 = ${result4}`);
