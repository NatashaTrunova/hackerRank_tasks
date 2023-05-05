'use strict';

function flippingBits(n) {
  // Write your code here
  let b = n;
  const arr = [];
  while (b != 0) {
    arr.unshift(b % 2);
    b = Math.trunc(b / 2);
  };
  const strN = arr.join('').padStart(32, 0).replaceAll(1, 2).replaceAll(0, 1).replaceAll(2, 0);
  return strN.split('').map((el, i) => el * Math.pow(2, strN.length - 1 - i)).reduce((acc, el) => acc + el, 0);
}

console.log(flippingBits(2147483647));