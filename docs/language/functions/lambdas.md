# Lambdas

Boa also support lambdas (sometimes called *closures*). Lambdas are simply anonymous functions.

## Simple example

Here is an example on how to create a lambda and store it in a variable:

```boa
let sum_of_two_i32s = fn (a: i32, b: i32) -> i32: a + b
```

When the type of a lambda can be inferred from the context (for instance when the type of the variable storing it is specified), it is possible to omit the parameters types, the return type, and even both at the same time:

```boa
let sum_of_i32s: fn (i32, i32) -> i32 = fn (a, b) -> i32: a + b
let sum_of_i32s: fn (i32, i32) -> i32 = fn (a: i32, b: i32): a + b
let sum_of_i32s: fn (i32, i32) -> i32 = fn (a, b): a + b
```

## `$n`

Lambdas can be simplified even more thanks to the `$n` operator which represents the *n*th parameter of a lambda (starting from 0). Note that in that case, the lambda's body has to be enclosed in curly braces.  For instance, the previous example could be rewritten as:

```boa
let sum_of_i32s: fn (i32, i32) -> i32 = { $0 + $1 }
```

Note that the number must be directly next to the `$` symbol, so `$1` is valid but `$ 1` is not.

Lambdas defined using the `$n` notation cannot be called with the named arguments syntax, as they do not have any!

## Capturing the environment

Like nested functions, lambdas have access to their "surrounding environment".
