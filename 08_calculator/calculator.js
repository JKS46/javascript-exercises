const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  if(array[0] == null) return 0;
	return array.reduce((a,b)=>(a+b));
};

const multiply = function(array) {
  return array.reduce((a,b)=>(a*b));
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a == 0||a==1) return 1;
  let fact =1;
  for(i=1;i<=a;i++){
    fact*=i;
  }
  return fact;
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
