'use strict';

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip = meal_cost * tip_percent / 100;
  const tax = meal_cost * tax_percent / 100;
  console.log(Math.round(meal_cost + tax + tip));
}

solve(12, 20, 8)