# Kata exercises

Short but sweet JS snippets to practice the fundamental building blocks.

[Kata1: Sum Largest Numbers](javaScript_Practice/kata/kata1.js)

[Kata2: Conditional Sum](javaScript_Practice/kata/kata2.js)

[Kata3: Vowel Counter](javaScript_Practice/kata/kata3.js)

[Kata4: Longest Instructor Name](javaScript_Practice/kata/kata4.js)

[Kata5: URL Encoder](javaScript_Practice/kata/kata5.js)

[Kata6: Check Air Sample](javaScript_Practice/kata/kata6.js)

[KataStretch1: Remove Duplicates](javaScript_Practice/kata/kataStetch1.js)

[KataStretch2: Reverse Words](javaScript_Practice/kata/kataStretch2.js)


## Solutions

### Kata1

Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.

My solution:

``` js

const data = [];

const sumLargestNumbers = function (data) {
  // Put your solution here

  let maxValue = 0;   
  let maxValue2 = 0;



  for (let i = 0; i < data.length; i++) {
    if (data[i] > maxValue) {
      maxValue2 = maxValue;
      maxValue = data[i];
   
    }
    } else if (data[i] > maxValue2) {
      maxValue2 = data[i];

}
 return maxValue + maxValue2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

```


We want to intialize our variables for the two largest numbers to make a sum.

```js
  let maxValue = 0;   
  let maxValue2 = 0;

```
We now make a for loop to iterate through the array

``` js
 for (let i = 0; i < data.length; i++) { ... }
 ```


If the current element is bigger than the current `maxValue`, it becomes the new `maxValue`, and the old maxValue is shifted down into `maxValue2`.

```js

if (data[i] > maxValue) {
      maxValue2 = maxValue;
      maxValue = data[i];
    }

```

There is still something missing. If the array was [4, 7, 6], `maxValue = 7` and  `maxValue2 = 4` , which is wrong since `maxValue2 = 6`. We get this wrong because the third index: `data[2] = 6`, is being skipped because during the third iteraion, `maxValue = 7` is greater than 6 so it becomes false (6 > 7 => false), thus gets thrown out of the loop. Numbers that are the second-largest but never larger than maxValue are ignored.



|Iter|current| maxValue | maxValue2 | Action                                  |
|----|-------|----------|-----------|-----------------------------------------|
| 0  |  4    |  0       |  0        | → maxValue = 4, maxValue2 = 0
| 1  |  7    |  4       |  0        | 7 > 4 → maxValue = 7, maxValue2 = 4
| 2  |  6    |  7       |  4        | 6 > 7? no → / is ignored / maxValue2 = 4 -> Wrong

Results: maxValue = 7, maxValue2 = 4 

We must place an else statement at the end to handle if the index `data[i]` is smaller than `maxValue` but bigger than `maxValue2` .  

```js
    else if (data[i] > maxValue2) {
      maxValue2 = data[i];
    }    
```
As a result, the 2nd largest number will be checked and won't be ignored to assign it to `maxValue2` 


|Iter|current| maxValue | maxValue2 | Action                                  |
|----|-------|----------|-----------|-----------------------------------------|
| 0  |  4    |  0       |  0        | → maxValue = 4, maxValue2 = 0
| 1  |  7    |  4       |  0        | 7 > 4 → maxValue = 7, maxValue2 = 4
| 2  |  6    |  7       |  4        | 6 > 7? no → 6 > 4? yes -> maxValue2 = 6 -> Correct

Results: maxValue = 7, maxValue2 = 6 


After this all we got to do is add `maxValue` and `maxValue2` together in the `return` statement.

```js
return maxValue + maxValue2;
```