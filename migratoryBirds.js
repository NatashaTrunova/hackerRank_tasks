'use strict';

function migratoryBirds(arr) {
  // Write your code here
  const count = {};
  arr.forEach(el => {
  count[el] = count[el] ? count[el] + 1 : 1;
  });
  const maxVal = Math.max(...Object.values(count));
  const res = Object
      .entries(count)
      .filter(el => el[1] === maxVal)
      .map(el => Number(el[0]));
return (Math.min(...res));
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3, 5, 5]));