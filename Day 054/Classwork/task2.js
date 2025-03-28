function isInRange(start, end, num) {
    if (typeof start === 'number' && typeof end === 'number' && typeof num === 'number') {
        return num >= start && num <= end;
    }
    return false;
}
