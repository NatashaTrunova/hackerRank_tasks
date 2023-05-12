'use strict';

function findDigits(n) {
  // Write your code here
  let count = 0;
  const arrNumber = [...String(n)].map(el => Number(el));
  arrNumber.forEach(el => {
    if (n % el === 0) count++; 
    
  });
  return count;
}

console.log(findDigits(1012));