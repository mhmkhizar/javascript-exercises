const sumAll = function (arg1, arg2) {
  if (
    arg1 < 0 ||
    arg2 < 0 ||
    !Number.isInteger(arg1) ||
    !Number.isInteger(arg2)
  )
    return "ERROR";

  let firstNumber = arg1;
  let secondNumber = arg2;
  let sum = 0;

  if (arg1 > arg2) {
    firstNumber = arg2;
    secondNumber = arg1;
  }

  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
