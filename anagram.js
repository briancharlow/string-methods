// Write a function to check whether two given strings are anagram of each other or not.
//  An anagram of a string is another string that contains the same characters, only the order of characters can be different. 
//  For example, “abcd” and “dabc” are an anagram of each other.

 function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the cleaned strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  const charMap1 = {};
  const charMap2 = {};

  // Populate character frequency map for the first string
  for (let char of cleanStr1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  // Populate character frequency map for the second string
  for (let char of cleanStr2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  // Compare the character frequency maps
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  // The strings are anagrams
  return true;
}

const string1 = 'abcd';
const string2 = 'dabc';
console.log(areAnagrams(string1, string2));  // Output: true

const string3 = 'Hello';
const string4 = 'World';
console.log(areAnagrams(string3, string4));  // Output: false
