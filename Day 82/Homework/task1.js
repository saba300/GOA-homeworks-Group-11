"3) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა "
"ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი"

function generateNumbers(start, end) {
    let numbers = [];
    
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    
    return numbers;
}

console.log(generateNumbers(1, 5));
