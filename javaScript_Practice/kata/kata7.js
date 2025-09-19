/*

At this year's town festival, the Agriculture Association will be handing out several awards for the best vegetables in a given category. They'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness or their plumpness.

For this exercise, you'll need to implement a function called judgeVegetables() that will decide which vegetable is best based on a given judging characteristic.


Input
const judgeVegetables = function(vegetables, metric) {
  // Your code in here ... 
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

console.log(judgeVegetables(vegetables, 'redness'));
console.log(judgeVegetables(vegetables, 'plumpness'));



Expected Output
"Old Man Franklin"
"Sally Tomato-Grower"


Create a function called judgeVegetables that will determine who has grown the best vegetable.

Your function will receive two parameters:

a list of veggies (as an array of objects), and
a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).
Your function must return the name of the person (vegetable.submitter) who submitted the vegetable with the highest ranking in the provided category.


*/


