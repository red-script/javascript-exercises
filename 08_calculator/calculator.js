const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function(params) {
  let total = 0;
  for (let i = 0; i < params.length; i++){
    total += params[i];
  }
  return total;
};

const multiply = function (params) {
  let multiple = 1;
  for (let i = 0; i < params.length; i++){
    multiple *= params[i];
  }
  return multiple;
};

const power = function(num1,num2) {
  return (Math.pow(num1, num2));
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
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
