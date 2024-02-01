const sumAll = function(num1,num2) {
    //returns sum of all number between them including them
    let b = num2;
    let a = num1;
    let sum = 0;
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }
    else {
        if (num1 < num2) {
            for (; b >= num1; b--) {
                sum += b
            }
        }
        else if (num1 > num2) {
            for (; a >= num2; a--) {
                sum += a
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
