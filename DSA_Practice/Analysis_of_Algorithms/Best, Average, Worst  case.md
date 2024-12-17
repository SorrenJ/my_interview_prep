Let's take a look at this example and it cases

``` js
function getSum (arr){
let n = arr.length();
if (n % 2 === 0)
return 0;

let sum = 0;
for (let i = 0; i < n; i++) {
  sum = sum + arr[i];
}
return sum;

}
```


The best case is if n is even and return 0. This case would be constant O(1) because it just return 0

The worst case is if n is odd and return a sum.  This case would be linear  O(n) because i is iterating through the loop.

n = 4

i = 0, i= 1, i=2, i=3

Let's say  k -1 is the last i 

k -1 < n 

k < n +1

We dont take constants so, it is O(n)

The average case is still linear assuming there is equal number of even and odd numbers

best case /2 + worst case/2

C/2 + Cn +C/2

Ignoring the lower order terms

it results with n

O(n)