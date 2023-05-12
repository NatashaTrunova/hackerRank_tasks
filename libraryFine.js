'use strict';

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  let fine;
  if (y1 > y2) {
    fine = 10000;
  } else if (m1 > m2 && y1 === y2) {
    fine = 500 * (m1 - m2);
  } else if (d1 > d2 && m1 === m2 && y1 === y2) {
    fine = 15 * (d1 - d2);
  } else {
    fine = 0;
  }
  return fine;
}

console.log(libraryFine(6, 6, 2015, 9, 6, 2016));