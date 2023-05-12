'use strict';

function appendAndDelete(s, t, k) {
  // Write your code here
  let newStr = '';
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      newStr += s[i];
    } else {
      break;
    };
  };

  const check = s.length + t.length - newStr.length * 2;
  return ((k >= s.length + t.length) || (check === k || (k > check && (k - check) % 2 === 0))) ? 'Yes' : 'No'; 
}

console.log(appendAndDelete('a', 'abcd', 5));

// let newStr = '';
//     for (let i = 0; i < Math.min(s.length, t.length); i++) {
//         if (s[i] === t[i]) {
//             newStr += s[i];
//         } else {
//             break;
//         };
//     };

//     const check = s.length + t.length - newStr.length * 2;
//     if ((k >= s.length + t.length) || (check === k || (k > check && (k - check) % 2 ===         0))) {
//         return 'Yes';
//     } else {
//     return 'No';
//   } 
