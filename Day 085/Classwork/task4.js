function manualIndexOf(value, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}

let arr = [10, 20, 30, 40, 50];

console.log(manualIndexOf(30, arr));
console.log(manualIndexOf(60, arr)); 
