// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(email) {
  // Split the email address into local part and domain
  const [localPart, domain] = email.split('@');
  
  // Get the first three characters of the local part
  const hiddenLocalPart = localPart.substr(0, 3) + '...';
  
  // Return the protected email address
  return hiddenLocalPart + '@' + domain;
}

console.log(protect_email("robin_singh@example.com"));
// Output: "robin...@example.com"
