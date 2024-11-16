document.getElementById('text').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var textElement = document.getElementById('textElement');
    textElement.textContent = inputText;
});

document.getElementById('color').addEventListener('click', function() {
    var inputColor = document.getElementById('inputColor').value;
    var textElement = document.getElementById('textElement');
    textElement.style.color = inputColor;
});

document.getElementById('size').addEventListener('click', function() {
    var inputSize = document.getElementById('inputSize').value;
    var textElement = document.getElementById('textElement');
    textElement.style.fontSize = inputSize + 'px';
});
