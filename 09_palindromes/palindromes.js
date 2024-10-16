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
  const palindrome = [];

  //convert everything to lower case
  const lowerCaseArray = wordToArray.map(item => item.toLowerCase())

  //remove non-letters
  const onlyLettersArray = lowerCaseArray.filter(isItALetter)
  //console.log(onlyLettersArray)
  //reverse the string
  let reversedWord = [...onlyLettersArray]
  reversedWord.reverse()
  //console.log(`only letters = ${onlyLettersArray}`)
  //console.log(`reversedWord post reverse = ${reversedWord}`)
  console.log(onlyLettersArray)
  console.log(reversedWord)

  for (let i = 0 ; i < onlyLettersArray.length ; i++) {
    if (onlyLettersArray[i] !== reversedWord[i]) {
      return false
    }
  }
};

//palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
