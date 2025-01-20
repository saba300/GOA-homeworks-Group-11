'4) დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ '
'calculateAverage ამ ფუნქციაში გამოითვლით იმ რიცხვების '
'საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშულა დააბრუნეთ ფუნქციიდან'

function generateNumbers(start, end) {
    let numbers = [];
    
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    
    return numbers;
}

function calculateAverage(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}

let numbers = generateNumbers(1, 5);
let average = calculateAverage(numbers)
