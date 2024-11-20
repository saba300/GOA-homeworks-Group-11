let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operation = prompt("Choose an operation + or - :");
let result;

if (operation === "+") {
    result = num1 + num2;
    console.log(result);
} else if (operation === "-") {
    result = num1 - num2;
    console.log(result);
} else {
    console.log("Invalid operation. Please choose '+' or '-'");
}
