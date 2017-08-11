The cjam works this way

```
1e4{         for loop with I from 0 to 1e4 
             (with more than 1e4 the performances would go down, but it works :-)
  S          S is initialized to ' '
  I+         concats I to S
  :S         assigns the new string to S
  ;          pops the string from the stack
}fI          f is for, I is the variable

S1>          slice S from position 1, removing ' 0'
s            converts S to a string (it is necessary, for some reason)
r#           finds the index of the argument and puts it in the stack
```

You can verify it [here](http://cjam.aditsu.net/#code=1e4%7BSI%2B%3AS%3B%7DfIS1%3Esr%23&input=2930)

In the JS version I called the variable with the same names and initialized S the same way ;-)