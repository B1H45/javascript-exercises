const removeFromArray = function(arr, ...rems) {
    for (let item of rems) {
        arr = arr.filter(element => element !== item);
    }
    console.log(`\n ${arr} \n`);

    return arr;
}
// Do not edit below this line
module.exports = removeFromArray;
