'use strict';

function lonelyinteger(a) {
  // Write your code here
  const obj = {};
  a.forEach(el => {
    obj[el] = obj[el] + 1 || 1;
  });
  return Object.entries(obj).filter(el => el[1] === 1)[0][0];
};

console.log(lonelyinteger([1, 2, 3, 4, 3, 2 ,1]));