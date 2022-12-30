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
};

// Do not edit below this line
module.exports = palindromes;
