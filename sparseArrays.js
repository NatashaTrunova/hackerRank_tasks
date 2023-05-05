'use strict';

function matchingStrings(strings, queries) {
  // Write your code here
  const obj = {};
  const arr = [];
  strings.forEach(el => {
    obj[el] = obj[el] + 1 || 1;
  });
  queries.forEach(el => {
    arr.push(obj[el] ? obj[el] : 0);
  });
  return arr;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));