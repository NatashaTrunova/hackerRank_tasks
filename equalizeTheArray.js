'use strict';

function equalizeArray(arr) {
  // Write your code here
  const obj = {};
  arr.forEach(el => {
    obj[el] = obj[el] + 1 || 1;
  });
  return arr.length - Math.max(...Object.values(obj));
}

console.log(equalizeArray([3, 3, 2, 1, 3]));