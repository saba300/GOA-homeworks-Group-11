function checkNumber(num) {
    if (num % 2 === 0 && num > 10) {
        console.log("The number is even and greater than 10.");
    } else if (num % 2 !== 0 && num < 5) {
        console.log("The number is odd and less than 5.");
    } else if (num > 20 || num < 5) {
        console.log("The number is greater than 20 or less than 5.");
    } else {
        console.log("The number is neither greater than 10 nor less than 5.");
    }
}

checkNumber(8);
checkNumber(22);
checkNumber(3);
