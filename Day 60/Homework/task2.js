function checkAge(age, hasParentalConsent) {
    if (age >= 18) {
        console.log("You are an adult.");
    } else if (age < 18 && hasParentalConsent) {
        console.log("You can use this service with parental consent.");
    } else {
        console.log("You cannot use this service.");
    }
}

checkAge(20, false);
checkAge(16, true);
checkAge(15, false);
