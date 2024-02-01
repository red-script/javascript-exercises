const repeatString = function (greet,num) {
    if (num < 0) {
        return 'ERROR';
    }
    else {
        let str = '';
        for (let i = 0; i < num; i++){
            str+=greet;
        }
        return str;
    }
};

// Do not edit below this line
module.exports = repeatString;
