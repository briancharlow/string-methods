// A string is a palindrome if it is read the same from forward or backward. 
// For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.
//  Write a JavaScript function to determine whether a given string is a palindrome.

 function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Check if the reversed string is equal to the original cleaned string
  return cleanStr === reversedStr;
}

const string1 = 'dad';
console.log(isPalindrome(string1));  // Output: true

const string2 = 'madam';
console.log(isPalindrome(string2));  // Output: true

const string3 = 'hello';
console.log(isPalindrome(string3));  // Output: false
