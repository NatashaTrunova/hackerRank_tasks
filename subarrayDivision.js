'use strict';

function birthday(s, d, m) { // s = array, d = day (sum), m - month (length)
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    count = (s.slice(i, i + m).reduce((acc, el) => acc + el, 0)) === d ? count + 1 : count;
  }
  return count;
}


console.log(birthday([1, 2, 1, 3, 2], 3, 2));