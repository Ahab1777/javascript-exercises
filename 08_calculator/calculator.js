const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	const sumArray = array;
  let sum = 0;
  for (let i = 0 ; i < sumArray.length ; i++) {
    
    sum += sumArray[i];

    console.log(i);
  }
  console.log(sum);
  
  return sum;
};


const multiply = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length ; i++){
    result = result * array[i]
  }
  return result;
};

const power = function(number, power) {
	let result = number;
  for (let i = 1 ; i < power ; i++) {
    result = result * number
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (let i = 1 ; i <= number ; i++) {
    result =  result * i
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
