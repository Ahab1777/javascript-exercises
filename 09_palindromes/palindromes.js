//cast everything to lower case
//remove all non-letters and non-number items
//reverse string
//compare strings to check for palindrome

const palindromes = function (word) {
  
  //function to remove all non-letter and non-number digits
  const wordCleaner = function (supposedPalindrome) {
    const cleanedWord = []
    const lowerCasedSupposedPalindrome = supposedPalindrome.toLowerCase()
    for (let i = 0 ; i < lowerCasedSupposedPalindrome.length; i++){
      //convert each letter to lower case
      let target = lowerCasedSupposedPalindrome[i].toLowerCase().codePointAt(0)
      //console.log(array[i]) 
      if((target >= 97 && target <= 122) || (target >= 48 && target <= 57)){
        //console.log(array[i])
        cleanedWord.push(lowerCasedSupposedPalindrome[i])
      }
    }
    //console.log(cleanedWord)
    return cleanedWord
  }

  let cleanedWord = wordCleaner(word).join('')
  
  //reverse string
  let reversedString = [...cleanedWord].reverse().join('')

  console.log(reversedString)
  console.log(cleanedWord)

  if (reversedString === cleanedWord){
    return true
  } else return false


  //let target = word.toLowerCase()



};

//palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
