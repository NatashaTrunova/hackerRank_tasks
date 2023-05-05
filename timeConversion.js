'use strict';

function timeConversion(s) {
  // Write your code here
  const [hours, min, sec] = s.split(':');
  let hoursNew;
  if (hours === '12') {
    hoursNew = (sec.slice(2) === 'PM') ?  12 : '00';
  } else {
    hoursNew = (sec.slice(2) === 'PM') ?  +hours + 12 : hours;
  };
  return `${hoursNew}:${min}:${sec.slice(0, 2)}`;
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:05:45AM'));