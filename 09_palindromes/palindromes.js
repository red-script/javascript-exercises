const palindromes = function (str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let length = cleanStr.length;
    for (let i = 0; i < length / 2; i++) {
        if (cleanStr.at(i) !== cleanStr.at(length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
