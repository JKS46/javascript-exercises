const ftoc = function() {

};

const ctof = function() {

};

function round(value, digits) {
  var rounded = Math.pow(10, digits || 0);
  return Math.round(value * rounded) / rounded;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
