const stringLengthMap = new Map();

stringLengthMap.set("apple", "apple".length);
stringLengthMap.set("banana", "banana".length);
stringLengthMap.set("cherry", "cherry".length);
stringLengthMap.set("date", "date".length);
stringLengthMap.set("kiwi", "kiwi".length);

let uniqueLengthSum = 0;
const uniqueLengths = new Set();

for (let length of stringLengthMap.values()) {
  uniqueLengths.add(length);
}

uniqueLengths.forEach(length => {
  uniqueLengthSum += length;
});

console.log("Sum of unique lengths:", uniqueLengthSum);