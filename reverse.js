// Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."

function reverseWords(str) {
  // Split the string into an array of words
  const words = str.toString().split(' ');

  // Reverse each word in the array
  const reversedWords = words.map(word => word.split('').reverse().join(''));

  // Join the reversed words back into a string
  return reversedWords.join(' ');
}

console.log(reverseWords("abc"));  // Output: "cba"

console.log(reverseWords("JavaScript Exercises"));  // Output: "tpircSavaJ sesicrexE"

console.log(reverseWords(1234));  // Output: "It must be a string."

