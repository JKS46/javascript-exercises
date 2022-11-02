const removeFromArray = function(array,...index) {
      for (let i = 0; i < index.length; i++) {
         if (array.includes(index[i])) {
               array.splice(array.indexOf(index[i]),1);
         }
      }
      return array;
};

// Do not edit below this line
module.exports = removeFromArray;
