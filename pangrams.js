'use strict';

function pangrams(s) {
  // Write your code here
  const newS = new Set(s.toLowerCase().replaceAll(' ', ''));
  return (newS.size === 26) ? 'pangram' : 'not pangram'
}


console.log(pangrams('We promptly judged antique ivory buckles for the next prize    '));
console.log(pangrams('We promptly judged antique ivory buckles for the prize    '));
console.log(pangrams('ads'));