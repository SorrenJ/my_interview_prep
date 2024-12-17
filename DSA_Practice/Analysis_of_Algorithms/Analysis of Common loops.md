

## Example 1:

``` js
for (let i = 0; i < n; i = i + c) {
// some θ(1) work
}

```

n : User Input
c: Constant

Question: what is the time complexity

Loop runs n/c times

Time complexity: θ(n)

n = 10

c = 2

i = 0 , i = 2, i = 4, i = 6, i = 8


Why  θ(n)?

iteration is like this:

i = i + c

We remove the constants so it would be θ(n)

## Example 2

``` js

for (let i = n; i > 0; i = i - c) {

// some θ(1) work

}
```

Loop:

n = 10
c = 2

i = 10 , i = 8, i =6, i= 4, i=2

Time complexity: θ(n)


## Example 3

``` js

for (let i = 1; i < n; i = i * c) {

// some θ(1) work

}
```
Loop:

n = 33 
c = 2

i = 1 , i = 2,  i = 4, i = 8, i = 16,  i = 32



the 1st iteration is i =c

the 2nd iteration is i=c^2

the third iteration is  i = c ^3

We can see that for each iteration: i = c^k

it stops at i >= n. Substituting i = c^k

c^k >= n

Lets find K:

logc​(c^k) ≥ logc​(n)

k ≥ logc​(n)

Time Complexity: θ (Log n)



## Example 4

``` js

for (let i = n; i>1; i=i/c) {


}
```

Loop:

n = 33 
c = 2

i = 33, i = 16 , i = 8,  i = 4, i = 2


Finding K

n/c, n/c^2 , n/c^3, ... n/c^k-1

n / c^k-1 > 1

c^k-1 (n / c^k-1) > 1 (c^k-1)

c ^k-1 < n

k -1 < logc^n

k < logc^n +1

θ (Log n)


## Example 5


``` js

for (let i = 2; i < n ; i= i ** c) {


}
```

Loop:
n = 33

c =2


i = 2 , i = 4, i =16


2^2 , (2^2)^2,  ((2^2)^2)^2, ... 


Find K:

2^c^0 , 2^c^1, 2^c^2 , 2c^k-1


2^c^k-1 < n

(log2) 2^c^k-1 < n (log2)

c^k-1 < log2n

(logc) c^k-1 < log2n (logc) 

k-1 < logc log2n 

k < logc log2n  + 1


θ (Log2 logc n) 

get rid of constants 

θ (Log log n) 
