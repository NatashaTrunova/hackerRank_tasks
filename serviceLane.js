'use strict';

function serviceLane(n, width, cases) {
  // Write your code here
  const arr = [];
  cases.forEach(el => {
    const minWidth = Math.min(...width.slice(el[0], el[1] + 1));
    arr.push(minWidth);
    
  });
  return arr;
}


console.log(serviceLane(5, [1, 2, 2, 2, 1], [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]]));