const reverseString = function(string) {
    const length = string.length;
    let reversedString = '';
    for (let i = 0; i < length; i++) {
        reversedString = reversedString.concat('', string.charAt(length - (1 + i)))
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
