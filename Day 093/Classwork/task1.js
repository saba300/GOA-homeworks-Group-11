var x = 10;

if (true) {
  var x = 20;  // Re-declaring x inside a block
  console.log(x);  // Output: 20
}

console.log(x);  // Output: 20 (because var is function-scoped or globally scoped)


let y = 10;

if (true) {
  let y = 20;  // Declaring a new y inside the block
  console.log(y);  // Output: 20 (block-scoped)
}

console.log(y);  // Output: 10 (y outside the block remains unchanged)



const z = 10;

if (true) {
  const z = 20;  // Re-declaring z inside a block
  console.log(z);  // Output: 20 (block-scoped)
}

console.log(z);  // Output: 10 (z outside the block remains unchanged)
