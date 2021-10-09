const add = function(...num) {
	return num.reduce(function(x, y) {
    return x + y;
  })
};


const subtract = function(...num) {
	return num.reduce(function(x, y) {
    return x - y;
  })
};

const sum = function(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  } return sum;
};


const multiply = function(num) {
  let multiple = 1;
  for (i = 0; i < num.length; i++) {
    multiple = multiple * num[i];
  }
  return multiple;
};

const power = function(...num) {
	return num.reduce(function(x, y) {
    return x ** y;
  })
};

const factorial = function(num) {
  let factorial = 1;
  for (i = num; i > 0; i--) {
    factorial = factorial * i;
  } return factorial;
	
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
