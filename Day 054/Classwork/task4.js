function processInput(input) {
    if (typeof input === 'string') {
        return input.length;
    } else if (typeof input === 'number') {
        return input > 100;
    } else if (typeof input === 'boolean') {
        return !input;
    }
    return null;
}
