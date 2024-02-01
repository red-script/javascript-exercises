const removeFromArray = function(arr,num,num2=0,num3=0,num4=0) {
    if (arr.indexOf(num) !== -1) {
        arr.splice(arr.indexOf(num), 1);
    }
    if (arr.indexOf(num2) !== -1) {
        arr.splice(arr.indexOf(num2), 1);
    }
    if (arr.indexOf(num3) !== -1) {
        arr.splice(arr.indexOf(num3), 1);
    }
    if (arr.indexOf(num4) !== -1) {
        arr.splice(arr.indexOf(num4), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;