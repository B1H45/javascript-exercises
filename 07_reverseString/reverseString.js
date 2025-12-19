const reverseString = function(str) {
    let arr = str.split("");
    let revArr = arr.reverse();
    let returnStr = revArr.join('');
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
