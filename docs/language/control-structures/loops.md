# Loops

Boa supports two kinds of loops: the `for` loop and the `while` loop.

## The `for` loop

Boa does not have a C-style `for` (`initialisation; condition; incrementation`) but a `for` loop based on ranges:

```boa
for number in [1, 2, 3, 4, 5]:
    println(number)

// will print:
// 1
// 2
// 3
// 4
// 5
```

Use `break` to leave the loop as soon as it is encountered, and `continue` to directly jump to the next iteration.

It is possible to combine multiple ranges to write nested `for` loops in a more concise way:

```boa
for
    number in [1, 2, 3]
    boolean in [true, false]
    character in ['a', 'b', 'c', 'd']
:
    ...

// ^ this is equivalent to:

for number in [1, 2, 3]:
    for boolean in [true, false]:
        for character in ['a', 'b', 'c', 'd']:
            ...
```

Conditionals (called *guards* in that case) can be added to the `for` expression to filter the iterated values:

```boa
for number in [0, 1, 2, 3] if number % 2 == 0:
    println(number)

// will print
// 0
// 2
```

```boa
for
    number in [1, 2, 3]
    boolean in [true, false]
    character in ['a', 'b', 'c']
    if number % 2 != 0
    if character == 'b' || character == 'c' // another if acts as an "and"
:
    println(f"{number}, {boolean}, {character}")

// will print
// 1, true, b
// 1, false, b
// 1, true, c
// 1, false, c
// 3, true, b
// 3, false, b
// 3, true, c
// 3, false, c
```

Note that the first *guard* can be written only after the last range of the `for` expression. For instance, the following example is **invalid**:

```boa
for
    number in [0, 1, 2, 3]
    if number % 2 == 0
    boolean in [true, false]
:
    ...
```

## The `while` loop

The `while` loop in Boa is similar to basically all the other existing `while` loops:

```boa
while condition:
    ...
```

Use `true` as the condition to create an infinite loop:

```boa
while true:
    ...
```

Like the `for` loop, it is possible to use `break` and `continue` inside a `while` loop.
