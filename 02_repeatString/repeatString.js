const repeatString = function(word,num) {
    let newWord = "";
    if (num < 0) {
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        newWord += word;
    }
    return newWord;
    // return word.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
