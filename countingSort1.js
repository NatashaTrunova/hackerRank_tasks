'use strict';

function countingSort(arr) {
  // Write your code here
  const  frequencyArray = new Array(100).fill(0);
  for (let i = 0; i < 100; i++) {
    let freq = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) freq++;
    }
    frequencyArray[i] = freq;
  }
  
  return frequencyArray;
}



console.log(countingSort([1, 2, 3, 5, 3, 1, 1]));


