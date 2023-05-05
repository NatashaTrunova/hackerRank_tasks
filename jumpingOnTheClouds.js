'use strict';

function jumpingOnClouds(c) {
  // Write your code here
  let step = 0;
  let count = 0;
  while (step < c.length - 1) {
    if (c[step + 2] === 0) {
      step += 2;
    } else {
      step++;
    }
    count++;
  }
  return count;
}


console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));