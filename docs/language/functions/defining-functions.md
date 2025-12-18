# Defining functions

## Simple example

Use the `fn` keyword to create a function. Use `->` to specify its return type. Use `return` to return a value from a function. All the code paths must return a value of the specified return type.

```boa
fn add_two_i32s(a: i32, b: i32) -> i32:
    return a + b
```

If a function does not return anything (i.e its return type is `void`), its return type can be omitted:

```boa
fn print_i32(x: i32):
    println(x)
```

## Recursive and mutually recursive functions

In Boa, functions can be recursive and mutually recursive:

```boa
// A recursive function

fn factorial(i: u32) -> u32:
    return 1 if i == 0 else i * factorial(i - 1)
```

```boa
// Two mutually recursive functions

fn is_even(i: u32) -> bool:
    return true if i == 0 else is_odd(i - 1)

fn is_odd(i: u32) -> bool:
    return false if i == 0 else is_even(i - 1)
```

### Tail-call optimization (TCO)

Functions that can be optimized with TCO will be optimized to a simple loop. Here is an example of such a function:

```boa
fn factorial2(i: i32, accumulator: u32) -> u32:
    return accumulator if i == 0 else factorial2(i - 1, i * accumulator)
```

If you do not understand what this whole subsection is about, it's okay. Just continue to the next section!

## First-class functions

In Boa, functions are said to be "first-class", meaning that they can be stored inside variables and passed around.

## Higher-order functions
