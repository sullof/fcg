The first JS solution is straightfoward. 

##### The second JS solutions

Let's say that we want to calculate how even is 20. In 8-bit binary notation we have

```
20 is
00010100

-20 is
11101100

20 & -20 is
00000100
```
The last number is 4. The log2 of 4 is 2, which is our expected result.
