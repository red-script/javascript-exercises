const findTheOldest = function(arr) {
    return arr.reduce((old, current) => {
        const ageOld = getAge(old.yearOfDeath, old.yearOfBirth);
        const ageCurrent = getAge(current.yearOfDeath, current.yearOfBirth);
        return ageOld > ageCurrent ? old : current;
    });
};

function getAge(yearOfDeath, yearOfBirth) {
    if (!yearOfDeath) {
        yearOfDeath = 2024;
    }
    return yearOfDeath - yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
