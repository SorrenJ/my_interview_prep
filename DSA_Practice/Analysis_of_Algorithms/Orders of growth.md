
Lets say we get this from finding the time complexity

`` f(n) = c1logn + c2 ``

The time complexity  for this is logn because we only take the highest order of growth and ignore the constants


Here is  how we compare 

``` js
c < loglogn < logn < logn < n^1/3 < b ^1/2 < n < n^2  < n^3 < n^4 < 2^n < n^n 

```




Lets practice

Let say we got two algorithm happening in a program

f(n) = Cn^2 + Cn + C

g(n) = Cnlogn + Cn + C





f(n) = Cn^2 + Cn + C

Highest order is  n^2


g(n) = Cnlogn + Cn + C

Highest order is nlogn

So  f(n) algortithm is alot slower than g(n) algorithm and it's possibly the worst case

