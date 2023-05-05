'use strict';

function getMoneySpent(keyboards, drives, b) {
  // Write your code here.
  let option = 0;
  keyboards.forEach(keyboard => {
    drives.forEach(drive => {
      let sum = keyboard + drive;
      if (sum <= b && sum > option) option = sum;
    });
  });
  // return option ? option : -1;
  return option;
}

console.log(getMoneySpent([5, 9, 2], [4, 3, 1], 15));