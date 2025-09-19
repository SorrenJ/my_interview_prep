/*
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are 
two instructors with the longest name, return the first one.

*/


const instructorWithLongestName = function (instructors, course) {
    let maxInstructor = instructors[0]; // Assume the first instructor has the longest name 
  
    for (let i = 1; i < instructors.length; i++) {
      if (instructors[i].name.length > maxInstructor.name.length) {
        maxInstructor = instructors[i];
      }
    }
    return maxInstructor; // Return the instructor object with the longest name
  };
  
  console.log(
    instructorWithLongestName([
      { name: "Samuel", course: "iOS" },
      { name: "Jeremiah", course: "Web" },
      { name: "Ophilia", course: "Web" },
      { name: "Donald", course: "Web" },
    ]),
  );
  console.log(
    instructorWithLongestName([
      { name: "Matthew", course: "Web" },
      { name: "David", course: "iOS" },
      { name: "Domascus", course: "Web" },
    ]),
  );