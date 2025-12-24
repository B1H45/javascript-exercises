const findTheOldest = function(arr) {
    if (arr.length == 0) {
        return "EMPTY LIST";
    }

    let oldest = arr[0];
    let oYearOfDeath = arr[0].yearOfDeath;
    if (!oYearOfDeath) {
        oYearOfDeath = 2025;
    }

    for (object of arr) {
        let yearOfDeath = object.yearOfDeath; 
        if (!yearOfDeath) {
            yearOfDeath = 2025;
        }

        if (yearOfDeath - object.yearOfBirth > oYearOfDeath - oldest.yearOfBirth) {
            oldest = object;
            oYearOfDeath = yearOfDeath;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
