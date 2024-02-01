const reverseString = function (str) {
    //split
    let arr = str.split('');
    //reverse
    let len = arr.length - 1;
    let rev = [];
    let z = 0;
    for (let i = 0; i < arr.length; i++){
        rev[z] = arr[len];
        len--;
        z++;
    }
    //join
    return rev.join('');
};

// Do not edit below this line
module.exports = reverseString;
