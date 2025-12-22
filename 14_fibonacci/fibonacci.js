const fibonacci = function(num) {
    let back2 = 1;
    let back1 = 1;
    let temp = 1;

    if (num < 0) {
        return "OOPS";
    }

    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }

    for (let i = 2; i < num; i ++) {
        temp = back1 + back2;
        back2 = back1;
        back1 = temp;
    }

    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
