'use strict';

function cutTheSticks(arr) {
  // Write your code here
  const res = [];
  let newArr = [...arr];
  while (newArr.length > 0) {
    res.push(newArr.length);
    let minItem = Math.min(...newArr);
    newArr = newArr.filter(el => el > minItem).map(el => el - minItem);
  }
  return res;
}


// cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]);
console.log(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]))

