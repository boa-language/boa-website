# Conditionals

Boa supports the `if`/`elif`/`else` conditional structure.

## Simple example

```boa
if condition:
    ...
elif other_condition:
    ...
else:
    ...
```

Of course, conditionals can be arbitrally nested inside other conditionals.

## Conditionals as expressions

In Boa, the `if` control structure also can be used as an expression, like in Python and Rust:

```boa
let a = 2, b = 3
let max_between_a_and_b = a if a > b else b
```

```boa
let a = 2, b = 3, c = 4
let max_between_a_and_b_and_c = a if a > b and a > c else b if b > c else c
```

When using a conditional as an expression, all the cases must be provided. This is enforced by the compiler.
