const palindromes = function (word) {
    let trimmedWord = word.toLowerCase().replace(/[^a-z]/g,"");
    let newWord = trimmedWord
                    .split("")
                    .reverse()
                    .join("");
    if(trimmedWord == newWord){
        return true;
    }
    return false;
    /* co pilot gave shit suggestions so assume this code is optimal */
};

// Do not edit below this line
module.exports = palindromes;
