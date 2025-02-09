function customMap(arr, callback) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); 
    }
    return result;  
}
  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
const transformedNumbersCustom = customMap(numbers, (num, index) => {
    if (index % 2 === 0) {
        return num * 2;  
    } else {
        return num;  
    }
});
  
console.log(transformedNumbersCustom);  
  