
/*
Create a function named conditionalSum that will be given an array of numbers and a condition, 
in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Use some sort of looping. Do not use Array.prototype.filter().
*/

const data = [];

const sumLargestNumbers = function (data, condition) {
  let maxValue = 0;
  let maxValue2 = 0;
  for (let i = 0; i < data.length; i++) {
    if ((condition === 'even' && data[i] % 2 === 0) || (condition === 'odd' && data[i] % 2 !== 0)) {
      if (data[i] > maxValue) {
        maxValue2 = maxValue;
        maxValue = data[i];
      } else if (data[i] > maxValue2) {
        maxValue2 = data[i];
      }
    }
  }
  return maxValue + maxValue2;
};

console.log(sumLargestNumbers([1, 2, 3, 4, 7], 'odd'));

console.log(sumLargestNumbers([1, 2, 3, 4, 7], 'even'));