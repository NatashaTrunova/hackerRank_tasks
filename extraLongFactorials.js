'use strict';

function extraLongFactorials(n) {
  // Write your code here
  let factorial = BigInt(n);
  for (let i = 1; i < n; i++) {
    factorial *= BigInt((n - i));
  }
  console.log(String(BigInt(factorial)));
}


console.log(extraLongFactorials(25));