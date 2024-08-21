const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9);
  //round it
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};
//fahrenheit to celsius
//x °F ≘ (x − 32) × ⁠5/9⁠ °C

const convertToFahrenheit = function(celsius) {
  fahrenheit = celsius * (9/5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//celsius to fahrenheit
//x °C ≘ (x × ⁠9/5⁠ + 32) °F

