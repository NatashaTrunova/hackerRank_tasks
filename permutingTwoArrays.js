'use strict';
function twoArrays(k, A, B) {
  // Write your code here
  const n = A.length;
  const sortA = A.sort( (a,b) => a - b );
  const sortB = B.sort((a,b) => a - b );
  
  for (let i = 0; i < n; i++) {
    if (typeof sortA[i] === 'number') {
      let sign = false;
      for (let j = 0; j < n; j++) {
        if (typeof sortB[j] === 'number') {
          sign = (sortA[i] + sortB[j]) >= k;
          if (sign) {
            sortA[i] += '*';
            sortB[j] += '*';
          };
        };
      };
    };
  };
  
  const check = sortA.every(el => typeof el === 'string') && sortB.every(el => typeof el === 'string');
  return check ? 'YES' : 'NO';
  
};



console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
console.log(twoArrays(1, [0, 1], [0, 2]));