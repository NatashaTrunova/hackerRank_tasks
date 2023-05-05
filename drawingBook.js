'use strict';

function pageCount(n, p) {
  // Write your code here
  const pageArr = [];
  for (let i = 0; i < n + 1; i = i + 2 ) {
    pageArr[i / 2] = [i, (i === n) ? '' : i + 1];
  };
  const getRes = function(arr) {
    let res;
    arr.forEach((el, i) => {
      if (el.includes(p)) res = i;
    });
    return res;
  };
  
  return Math.min(getRes(pageArr), getRes([...pageArr].reverse()));
}


console.log(pageCount(6, 2));

