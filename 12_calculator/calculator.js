const add = function(a, b) {
	return a + b; 
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for (item of arr) {
    sum +=item;
  }
  return sum
};

const multiply = function(arr) {
  let product = 1;
  for (item of arr) {
    product = product*item;
  }
  return product;
};

const power = function(target, power) {
  let result = target;
  for (let i = 1; i < power; i ++) {
    result = result * target;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  let result = 1;

  for (let i = num; i > 0; i --) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
