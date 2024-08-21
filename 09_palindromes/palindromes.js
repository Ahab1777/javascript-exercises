//remove every unit that is not a letter from the string
    //filter out every non-letter by comparing to unicode number range (97 - 122  / a - z) 
    // function isLetter(str) {
    //  return str.length === 1 && str.match(/[a-z]/i);
    //   }
      
    //convert string to lowercase
//create a reversed copy of the string
//compare original and reversed string

const palindromes = function (word) {

  const isItALetter = (letter) => {
    const unicodeChar = letter.charCodeAt(0) 
    return (unicodeChar >= 97 && unicodeChar <= 122);
  }

  const wordToArray = [...word];
  const onlyLettersArray = '';
  const palindrome = '';

  //convert everything to lower case
  wordToArray = wordToArray.map(item => item.toLowerCase())

  for (let i = 0 ; i < wordToArray.length ; i++) {

  }
};

// Do not edit below this line
module.exports = palindromes;
