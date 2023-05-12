'use strict';

function minimumDistances(a) {
  // Write your code here
  const obj = {};
  a.forEach((el, i) => {
    if (obj[el]) {
       obj[el].push(i);
    } else {
      obj[el] = [i];
    }
  });
    
    
    const newObj = Object.values(obj).filter(el => el.length > 1);
    console.log(newObj);
    
    const dists = [];
    newObj.forEach(el => {
      for (let j = 0; j < el.length - 1; j++) {
        dists.push(el[j + 1] - el[j]);
      };
    });
      
   return dists.length > 0 ? Math.min(...dists) : -1;
}


console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
