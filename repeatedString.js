'use strict';

function repeatedString(s, n) {
  // Write your code here
  const l = s.length;
  const countAInS = [...s].filter(el => el === 'a').length;
  const remainder = n % l;
  const mainCount = (n - remainder) / l;
  const countAInRem = [...s.slice(0, remainder)].filter(el => el === 'a').length;
  return countAInS * mainCount + countAInRem;
}


console.log(repeatedString('a', 100));