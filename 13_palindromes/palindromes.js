const palindromes = function (str) {
    let arr = str.split("");
    arr = arr.filter(str => str !== '!' && str !== " " && str !== "." && str !== ",");
    str = arr.join("");
    str = str.toLowerCase();
    console.log(arr);
    for (let i = 0; i < str.length/2; i ++) {
        if (str[i] != str[str.length-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
