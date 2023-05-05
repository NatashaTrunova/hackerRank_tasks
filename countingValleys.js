'use strict';

function countingValleys(steps, path) {
  // Write your code here
  let seeLevel = 0;
  let valleys = 0;
  [...path].forEach(step => {
    if (step === 'D' && seeLevel === 0) valleys++;
    if (step === 'U') seeLevel++;
    if (step === 'D') seeLevel--;
  });
  return valleys;
}


console.log(countingValleys(8, 'UDDDUDUUUDDDUDUU'));
