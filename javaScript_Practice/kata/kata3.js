/*
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
*/

const numberOfVowels = function (word) {
    a = (word.match(new RegExp("a", "g")) || []).length;
    e = (word.match(new RegExp("e", "g")) || []).length;
    i = (word.match(new RegExp("i", "g")) || []).length;
    o = (word.match(new RegExp("o", "g")) || []).length;
    u = (word.match(new RegExp("u", "g")) || []).length;
  
    return a + e + i + o + u;
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));
  