/*

The city asks you to help track and tackle their air quality concerns. You've decided to install air pollution sensors 
all over town to monitor air quality and identify problem areas. 
Your task is to write the code for the sensors to trigger a special message when the air is too polluted.

The function will take in two arguments. The first argument is 
an array of strings, where each string represents a 
small air sample that is either clean or dirty.

The second argument is a number representing the highest 
acceptable amount of dirty samples. For example, 
a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for the air to be considered clean. 
Your function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

Implement a function called checkAir(), which will check a collection of air samples.

Input:

const checkAir = function (samples, threshold) {
  // Code here!
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


Output:

Polluted
Polluted
Clean


*/

const checkAir = function (samples, threshold) {
    // Code here!
    let c = 0;
    let d = 0;
    for (let i = 0; i < samples.length; i++) {
      if (samples[i] === "clean") {
        c++;
      }
      if (samples[i] === "dirty") {
        d++;
      }
    }
  
    if (d / samples.length < threshold) {
      answer = "Clean";
      //console.log (d/samples.length);
    }
    if (d / samples.length > threshold) {
      answer = "Polluted";
      //console.log (d/samples.length);
    } else if (threshold == d / samples.length) {
      answer = "Undecided";
      //console.log (d/samples.length);
    }
  
    return answer;
  };
  
  console.log(
    checkAir(
      [
        "clean",
        "clean",
        "dirty",
        "clean",
        "dirty",
        "clean",
        "clean",
        "dirty",
        "clean",
        "dirty",
      ],
      0.3,
    ),
  );
  
  console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));
  
  console.log(
    checkAir(
      ["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"],
      0.9,
    ),
  );

