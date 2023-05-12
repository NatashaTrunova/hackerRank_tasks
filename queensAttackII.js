'use strict';

function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  const mainDiag = n - Math.abs(r_q - c_q) - 1;
  const secondDiag = Math.abs(n - Math.abs((r_q - (n - c_q + 1)))) - 1;
  const queensCellsCount = (n - 1) * 2 + mainDiag + secondDiag;
  let diagonalCount = 0;
  let horizontalCount = 0;
  let verticalCount = 0;

  if (obstacles) {
    const horizontal = obstacles.filter(([r, c]) => r === r_q);
    let horL = horizontal.filter(([r, c]) => c < c_q);
    horL = horL.length > 0 ? horL.reduce((acc, cur) => acc[1] > cur[1] ? acc : cur)[1] : 0;
    let horG = horizontal.filter(([r, c]) => c > c_q);
    horG = horG.length > 0 ? n + 1 - horG.reduce((acc, cur) => acc[1] < cur[1] ? acc : cur)[1] : 0;
    horizontalCount = horL + horG;
                  
    const vertical = obstacles.filter(([r, c]) => c === c_q);
    let vertL = vertical.filter(([r, c]) => r < r_q);
    vertL = vertL.length > 0 ? vertL.reduce((acc, cur) => acc[0] > cur[0] ? acc : cur)[0] : 0;
    let vertG = vertical.filter(([r, c]) => r > r_q);
    vertG = vertG.length > 0 ? n + 1 - vertG.reduce((acc, cur) => acc[0] < cur[0] ? acc : cur)[0] : 0;
    verticalCount = vertL + vertG;
                
    const diagonal = obstacles.filter(([r, c]) => 
    Math.abs(r - r_q) === Math.abs(c - c_q));
    
    let diagI = diagonal.filter(([r, c]) => r > r_q && c > c_q);
    diagI = diagI.length > 0 ? diagI.reduce((acc, cur) => acc[0] < cur[0] ? acc : cur) : diagI;
    
    let diagII = diagonal.filter(([r, c]) => r > r_q && c < c_q);
    diagII = diagII.length > 0 ? diagII.reduce((acc, cur) => acc[0] < cur[0] ? acc : cur) : diagII;

    let diagIII = diagonal.filter(([r, c]) => r < r_q && c < c_q);
    diagIII = diagIII.length > 0 ? diagIII.reduce((acc, cur) => acc[0] > cur[0] ? acc : cur) : diagIII;

    let diagIV = diagonal.filter(([r, c]) => r < r_q && c > c_q);
    diagIV = diagIV.length > 0 ? diagIV.reduce((acc, cur) => acc[0] > cur[0] ? acc : cur) : diagIV;


    const diagArr = [diagI, diagII, diagIII, diagIV];
        
    diagArr.forEach(diag => {
      if (diag.length > 0) {
        const [r, c] = diag;
        const s = Math.min((r < r_q ? r: n - r + 1), (c < c_q ? c : n - c + 1));
        diagonalCount += s;
      }
    });
  };

  return queensCellsCount - (diagonalCount + horizontalCount + verticalCount);
};  
  
// console.log(queensAttack(10, 1, 7, 5, [[2, 5], [5, 5], [9, 5], [7, 2], [7, 7], [7, 9], [7, 4], [5, 7], [3, 9], [10, 2], [9, 3], [3, 1], [5, 3], [8, 6], [10, 8]]));

// console.log(queensAttack(4, 0, 4, 4));

console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));
// console.log(queensAttack(88587, 9, 20001, 20003, [[20001, 20002], [20001, 20004], [20000, 20003], [20002, 20003], [20000, 20004], [20000, 20002], [20002, 20004], [20002, 20002], [564, 323]]));