'use strict';

function nonDivisibleSubset(k, s) {
  // Write your code here
  const countArray = new Array(k).fill(0);
    s.forEach(el => {
        countArray[el % k] += 1;
    });
    const resArray = [];
    let nosTaken;
    for (let i = 0; i < Math.trunc(k / 2) + 1; i++) {
        if (i === 0 || i === k / 2) {
            nosTaken = Math.min(countArray[i], 1);
        } else {
            nosTaken = Math.max(countArray[i], countArray[k - i]);
        } 
        resArray.push(nosTaken);
    }; 
    return resArray.reduce((acc, el) => acc + el, 0);
}

// console.log(nonDivisibleSubset([1, 7, 2, 4], 3));
// console.log(nonDivisibleSubset(4, [19, 10, 12, 24, 25, 22]));
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));