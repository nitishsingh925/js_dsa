/*
------------------------------------
Programa:  Simple Password Validation
------------------------------------
*/

// The password must be contain at least
//  1.one lowercase letter
//  2.one uppercase letter
//  3.one number
//  4.one special character

// The password must be at least 8 characters long

const passwordValidation = (password) => {
  if (password.length < 8) return "Password must be at least 8 characters long";
  if (password.search(/[a-z]/) == -1)
    return "Password must contain at least one lowercase letter";
  if (password.search(/[A-Z]/) == -1)
    return "Password must contain at least one uppercase letter";
  if (password.search(/[0-9]/) == -1)
    return "Password must contain at least one number";
  if (password.search(/[!@#$%^&*(),.?":{}|<>]/) == -1)
    return "Password must contain at least one special character";
  return true;
};

// Test cases
console.log(passwordValidation("Abcd@1234")); // Output: true
console.log(passwordValidation("abc@123")); // Output: Password must be at least 8 characters long
console.log(passwordValidation("ABCD1234")); // Output: Password must contain at least one lowercase letter
console.log(passwordValidation("abcd1234")); // Output: Password must contain at least one uppercase letter
console.log(passwordValidation("Abcdabcd")); // Output: Password must contain at least one number
console.log(passwordValidation("Abcd1234")); // Output: Password must contain at least one special character
