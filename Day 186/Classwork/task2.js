const args = process.argv.slice(2); 

if (args.length < 3) {
  console.log("please enter 3 numbers");
} else {
  const numbers = args.map(Number);
  const sum = numbers.reduce((a, b) => a + b, 0);
  console.log(`sum of numbers: ${sum}`);
}
