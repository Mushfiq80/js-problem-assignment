function checkDigitsInName(name) {
    if (typeof name === 'string') {
        if (name.match(/\d/)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Invalid Input';
    }
}