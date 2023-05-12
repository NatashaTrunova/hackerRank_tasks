'use strict';

function viralAdvertising(n) {
  // Write your code here
  let shared = 5;
  let liked = 0;
  let cumulative = 0;
  for (let i = 1; i < n + 1; i++) {
    liked = (shared - shared % 2) / 2;
    cumulative += liked;
    shared = liked * 3;
  };
  return cumulative;
}

console.log(viralAdvertising(5));