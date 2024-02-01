const convertToCelsius = function (far) {
  let temp = parseFloat((far - 32) * 5 / 9).toFixed(1);
  if (Number.isInteger(parseFloat(temp))) {
    return parseInt(temp);
  }
  return parseFloat(temp);
};

const convertToFahrenheit = function (cel) {
  //shorter method
  return Math.round(((cel* 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
