document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    const validationMessage = document.getElementById("validationMessage");

    if (!email || !password || !terms) {
        validationMessage.textContent = "Please fill all fields and agree to terms.";
        return;
    }

    const passwordMessage = validatePassword(password);
    if (passwordMessage !== "Password is valid!") {
        validationMessage.textContent = passwordMessage;
        return;
    }

    validationMessage.textContent = "";
    document.querySelector(".container").style.display = "none";
    document.querySelector("#confirmModal").style.display = "block";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.classList.add("dark-mode");
    document.querySelector("#confirmModal").style.display = "none";
    document.querySelector(".programmersPage").style.display = "block";
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.querySelector("#confirmModal").style.display = "none";
    document.querySelector(".programmersPage").style.display = "block";
});

document.querySelectorAll('input[name="programmer"]').forEach(radio => {
    radio.addEventListener("change", function() {
        const programmer = this.value;
        displayProgrammerInfo(programmer);
    });
});

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

function displayProgrammerInfo(programmer) {
    const programmerInfo = document.getElementById("programmerInfo");

    if (programmer === "programmer1") {
        programmerInfo.innerHTML = `
            <h3>Programmer 1</h3>
            <img src="programmer1.jpg" alt="Programmer 1" width="100">
            <p>Programmer 1 has experience with JavaScript, Node.js, and React.</p>
        `;
    } else if (programmer === "programmer2") {
        programmerInfo.innerHTML = `
            <h3>Programmer 2</h3>
            <img src="programmer2.jpg" alt="Programmer 2" width="100">
            <p>Programmer 2 specializes in Python, Django, and Machine Learning.</p>
        `;
    } else if (programmer === "programmer3") {
        programmerInfo.innerHTML = `
            <h3>Programmer 3</h3>
            <img src="programmer3.jpg" alt="Programmer 3" width="100">
            <p>Programmer 3 is skilled in C++, Java, and Android development.</p>
        `;
    }
}
