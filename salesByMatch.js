'use strict';

function sockMerchant(n, ar) {
  // Write your code here
  const sockObj = {};
  ar.forEach(el => {
    sockObj[el] = sockObj[el] + 1 || 1; 
  });
  return Object.values(sockObj).map(el => (el - el % 2) / 2).reduce((acc, el) => acc + el, 0);
  
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));