const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 3];

const repeatedTwice = numbers.filter((num, index, arr) => {
    const count = arr.filter(x => x === num).length;
    return count === 2;
});

console.log(repeatedTwice);  
