function manualFilter(callback, arr) {
    let newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
}

function isEven(number) {
    return number % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = manualFilter(isEven, numbers);

console.log(evenNumbers);
