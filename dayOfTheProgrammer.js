'use strict';

// function dayOfProgrammer(year) {
//   // Write your code here
  
//   let dat;
//   if (year > 1918) {
//     dat = new Date(year, 0, 1);
//     const newDat = new Date(+dat + (256 - 1) * 24 * 3600 * 1000);
//     const res = new Intl.DateTimeFormat('ru-Ru').format(newDat);
//     return res;
//   } else if (year === 1918) {
//     dat = new Date(year, 0, 1);
//     const newDat = new Date(+dat + (256 - 1 - 13) * 24 * 3600 * 1000);
//     const res = new Intl.DateTimeFormat('ru-Ru').format(newDat);
//     return res;
//   } else if (year < 1918 && year >= 1700) {
//       if (year % 4 === 0) {

//       }
//   }
  
  
// }

// function dayOfProgrammer(year) {
//   // Write your code here
//   let count;
//   if (year > 1918) {
//     count = 256 - 1;
//   } else if (year === 1918) {
//     count = 256 - 1 - 13;
//   } else if (year < 1918 && year >= 1700) {
//       if (year % 4 === 0) count = 256 - 2;
//       else count = 256 - 1;
//   }
//   const programDayNumber = new Date(+new Date(year, 0, 1) + count * 24 * 3600 * 1000);
//   return new Intl.DateTimeFormat('ru-Ru').format(programDayNumber);
// }

function dayOfProgrammer(year) {
  // Write your code here
  if (year > 2700 || year < 1700) return;
  let count = 256 - 1;
  if (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
    count = 256 - 2;
  } else if (year === 1918) {
    count = 256 - 1 + 13;
  } else if ((year < 1918 && year >= 1700) && year % 4 === 0) {
    count = 256 - 2;
  }
  const programDay = new Date(+new Date(2021, 0, 1) + count * 24 * 3600 * 1000);
  let day = programDay.getDate();
  let month = programDay.getMonth();
  return new Intl.DateTimeFormat('ru-Ru').format(new Date(year, month, day));
}

console.log(dayOfProgrammer(1984));


