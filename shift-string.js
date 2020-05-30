/**
 * 
 * PROBLEM AS STATED BY LANDON SCHROPP:
 * 
 * Write a function that shifts each letter in a string forward one character.
 * For example, the string "abc" should be shifted to "bcd" and the string
 * "bobby" should be shifted to "cpccz".
 * 
 */

// MY SOLUTION:

// NOTE: My intention is to use modern JavaScript (latest standard) with Node.js
// to allow standalone script execution. It is therefore necessary to have at
// least the current LTS distribution of Node.js installed in order to run
// this script as intended.

// URL for Node.js: https://nodejs.org/en/

export const shiftString = (string) => {

  let shiftedString = '';

  for (let index = 0; index < string.length; index++) {

    // Increment each character code by 1:

    let shiftedChar = string.charCodeAt(index) + 1;

    shiftedString += String.fromCharCode(shiftedChar);

  }

  return shiftedString;

};

// IMPORTANT: shiftString() is not suitable for strings that contain carriage returns or spaces
// because the algorithm does not take into account what their shifted values are. 

