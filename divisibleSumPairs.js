'use strict';

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i; j < ar.length; j++) {
      if (i != j && (ar[i] + ar[j]) % k === 0) count++;
      }
    }
    return count;
  }


console.log(divisibleSumPairs(6, 3, [1, 2, 3, 4, 5, 6]));