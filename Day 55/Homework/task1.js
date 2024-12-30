function validatePassword(password) {
    const regex = /^[a-zA-Z0-9._-]{4,12}$/;

    if (password.length < 4 || password.length > 12) {
        return "Password must be between 4 and 12 characters long.";
    }
    if (/\s/.test(password)) {
        return "Password cannot contain spaces.";
    }
    if (!regex.test(password)) {
        return "Password must only contain letters, digits, '-', '.', or '_'.";
    }
    return "Password is valid!";
}

function generateRandomPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-";
    const length = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

document.getElementById("validateBtn").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    const validationMessage = validatePassword(password);
    
    const validationMessageElement = document.getElementById("validationMessage");
    validationMessageElement.textContent = validationMessage;

    if (validationMessage === "Password is valid!") {
        validationMessageElement.style.color = "green";
    } else {
        validationMessageElement.style.color = "red";
    }
});

document.getElementById("generateBtn").addEventListener("click", function() {
    const randomPassword = generateRandomPassword();
    const randomPasswordElement = document.getElementById("randomPassword");
    randomPasswordElement.textContent = "Random password: " + randomPassword;
});
