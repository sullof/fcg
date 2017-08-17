The first JS solution is straightfoward. 

##### The second and third JS solutions

Let's say that we want to calculate how even is 20. In 32-bit binary notation we have

```
20 
00000000000000000000000000010100

-20
11111111111111111111111111101100

20 & -20
00000000000000000000000000000100
```
In the last, the two trailing zeros
mean that 20 is even 2 times

Unfortunately in Javascript there isn't a function to calculate trailing zeros.

The solution #2 converts n&-n to a binary string and calculates the size. But this is verbose.

Since in JS there is a function to calculating the leading 0, the solution #3 uses that, substracting the leading zeros + 1 from 32.

##### The cjam solution
```
r     reads the argument
i     converts to integer 
z     takes the abs value
mf    factorize it, for example 20 will become 2 2 5
Ye=   counts how many times Y (which is 2) 
      is present in the list

```
The Convex solution takes advantage from the fact that Convex puts the argument in the stack by default. It will fail, though, if you pass more than one argument.