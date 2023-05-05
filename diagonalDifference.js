'use strict';

function diagonalDifference(arr) {
  // Write your code here
  const n = arr.length;
  let sumOfFirstDiagonal = 0;
  let sumOfSecondDiagonal = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) sumOfFirstDiagonal += arr[i][j];
      if (j === n - 1 - i) sumOfSecondDiagonal += arr[i][j];
    }
  }
  return Math.abs(sumOfFirstDiagonal - sumOfSecondDiagonal);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));