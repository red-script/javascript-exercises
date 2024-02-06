const getTheTitles = function(arr) {
    // let array = [];
    // let length = arr.length;
    // for (let i = 0; i < length; i++){
    //     array[i] = arr[i].title;
    // }
    // return array;
    return arr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
