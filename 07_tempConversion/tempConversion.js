<<<<<<< HEAD
const ftoc = function(ftemp) {
  let ctemp = (ftemp - 32)*(5/9);
  return round(ctemp,1);
};

const ctof = function(ctemp) {
    let ftemp = (ctemp*(9/5))+32;
    return round(ftemp,1);
=======
const convertToCelsius = function() {
};

const convertToFahrenheit = function() {
>>>>>>> upstream/main
};

function round(value, digits) {
  var rounded = Math.pow(10, digits || 0);
  return Math.round(value * rounded) / rounded;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
