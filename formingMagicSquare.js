'use strict';

function formingMagicSquare(s) {
  // Write your code here
  const sCopy = [...s];
  const n = 3;
  const order = n * (Math.pow(n, 2) + 1) / 2;

  const getSumForEl = function(i, j) {
    const rowSum = s[i][0] + s[i][1] + s[i][2];
    const colSum = s[0][j] + s[1][j] + s[2][j];
    let mainDiagSum;
    let secondDiagSum;
    if (i === j) mainDiagSum = s[0][0] + s[1][1] + s[2][2];
    if (i === n - 1 - j) secondDiagSum = s[0][2] + s[1][1] + s[2][0];
    return [rowSum, colSum, mainDiagSum, secondDiagSum];
  };

  s.forEach((row, i) => {
    const diff = row.reduce((acc, el) => acc + el, 0) - order;
    row.forEach(el, j => {
      if 
    }); 
    
  });
}


console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]));