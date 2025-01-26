document.getElementById('addButton').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 1001);
    let newParagraph = document.createElement('p');
    newParagraph.textContent = `Random Number: ${randomNumber}`;
    document.body.appendChild(newParagraph);
});
