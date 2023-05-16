// Write a JavaScript function to check whether a string is blank or not.




function isBlank(str) {
  // Remove whitespace characters
  const trimmedStr = str.trim();

  // Check if the trimmed string is empty
  return trimmedStr === '';
}
console.log(isBlank(''));                // Output: true
console.log(isBlank('   '));             // Output: true
console.log(isBlank('Hello, world!'));   // Output: false
console.log(isBlank('  OpenAI  '));      // Output: false
