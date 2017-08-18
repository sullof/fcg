The first JS solution is straightfoward. 

##### The second JS solutions

Let's say that we want to calculate how even is 20. In 32-bit binary notation we have

```
20 
00000000000000000000000000010100

-20
11111111111111111111111111101100

20 & -20
00000000000000000000000000000100
```
The last number is 4. The log2 of 4 is 2, which is our expected result.

##### The ruby solution

It is basically like the 2nd JS solution.

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