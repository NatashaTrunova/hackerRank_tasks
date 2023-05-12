'use strict';

// function squares(a, b) {
//   // Write your code here
//   let count = 0;

//   for (let i = a; i < b + 1; i++) {
//     if (el => '014569'.includes(String(el).slice(-1)) && 
//     (i % 4 === 0 || i % 8 === 1 || i % 9 === 0 || i % 3 === 1)) {
//       for (let j = 1; j < Math.sqrt(i) + 1; j++) {
//         if (i / j === j) {
//           count++;
//           break;
//         };
//       };
//     };
//   };
//   return count;
//   };


function squares(a, b) {
  // Write your code here
  let sqrNext = 1;
  let diff = 1;
  let count = 0;
  while (sqrNext <= b) {
    if (sqrNext >= a) {
      count++;
    }
    diff += 2;
    sqrNext += diff;
  };
  return count;
};

      
console.log(squares(3, 10));

