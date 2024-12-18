

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


## Example 6 Multiple loops

``` js
function fun (n) {

for (let i = 0; i<n; i++) {

// Some θ(1) work 

}
for (let i = 1; i < n; i = i * 2) {

// Some θ(1) work 

}

for (let i = 1; i < 100; i++) {

// Some θ(1) work 

}

}

```

Loop 1 is O(n) 

Loop 2 is O(logn)

Loop 3 is O(1) since  n is a constant 99 times

Now we simply add the time complexities 

 O(n) + O(1)  + O(logn)

When we add, we ignore the lower order growth. The largest growth is O(n) so this will be our result

## Example 7 Nested Loops

``` js
for (let i = 0; i<n; i++) {

// Some θ(1) work 

for (let j = 1; j < n; j = j * 2) {

// Some θ(1) work 

}
}
```

Loop 1 is O(n) 

Loop 2 is O(logn)

Since they loop 2 is nested inside loop 1 we multiply

= O(n) X O(logn)

= O(nlogn)

Putting it together this results to O(nlogn)


## Example 8 Two Nested Loops


``` js

function fun (n,m){

for (let i = 0; i<n; i++) {

// Some θ(1) work 

for (let j = 1; j < n; j = j * 2) {

// Some θ(1) work 

}
}

for (let i =0; i<m; i++){

for (let j = 1; j < m; j++) {

// Some θ(1) work 

}
}

}



}
```


Lets look at it piece by piece


``` js

for (let i = 0; i<n; i++) {

// Some θ(1) work 

for (let j = 1; j < n; j = j * 2) {

// Some θ(1) work 

}
}
```

Loop 1 is O(n) 

Loop 2 is O(logn)

Since they loop 2 is nested inside loop 1 we multiply

= O(n) X O(logn)

= O(nlogn)

Putting it together this results to O(nlogn)

Now lets look at the 2nd nested loop

``` js

for (let i =0; i<m; i++){

for (let j = 1; j < m; j++) {

// Some θ(1) work 

}
}

```

Loop 1 is  O(n)

Loop 2 is  O(n)

Since they loop 2 is nested inside loop 1 we multiply

= O(n) X O(n)

= O(n^2)


Finally we take the two nested loop complexities and simply add them

O(n^2)+ O(nlogn) 