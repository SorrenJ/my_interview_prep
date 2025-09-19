
/* 
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.


*/


const data = [];

const sumLargestNumbers = function (data) {
  // Put your solution here

  let maxValue = 0;   
  let maxValue2 = 0;



  for (let i = 0; i < data.length; i++) {
    if (data[i] > maxValue) {
      maxValue2 = maxValue;
      maxValue = data[i];
   
    } else if (data[i] > maxValue2) {
      maxValue2 = data[i];
   }


}
 return maxValue + maxValue2;
}

console.log(sumLargestNumbers([4, 7, 6]));

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));