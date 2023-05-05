'use strict';

function miniMaxSum(arr) {
  // Write your code here
  const sumArr = arr.reduce((acc, el) => acc + el, 0);
  const newArr = arr.map(el => sumArr - el);
  console.log(Math.min(...newArr), Math.max(...newArr));
};

miniMaxSum([1, 3, 5, 7, 9]);