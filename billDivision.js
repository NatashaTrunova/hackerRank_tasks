'use strict';

function bonAppetit(bill, k, b) {
  // Write your code here
  const bActual = (bill.reduce((acc, el) => acc + el, 0) - bill[k]) / 2;
  console.log(bActual === b ? 'Bon Appetit' : b - bActual);
}

bonAppetit([3, 10, 2, 9], 1, 7);