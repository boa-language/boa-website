# Calling functions

Calling functions in Boa is done with the same syntax as virtually all the mainstream programming languages.

## Simple example

```boa{4}
fn add_two_i32s(a: i32, b: i32) -> i32:
    return a + b

let five = add_two_i32s(2, 3)
```

## Named arguments

### Mixing positional and named arguments

### Uniform function call syntax (UFCS)

// function calls, named arguments
// UFCS
