# Structures

Structures in Boa are similar to structures in C or Rust.

## Simple example

Here is an example of a structure representing a 2-dimensional coordinate:

```boa
struct Point2D:
    x: i32
    y: i32

// OR

struct Point2D:
    x: i32, y: i32

// OR

struct Point2D: x: i32, y: i32
```

Note the absence of a comma when two fields of a structure are defined on two different lines.

## Creating an instance of a structure

Creating an instance of a structure is done the same way as a function call:

```boa
let origin = Point2D(0, 0)
```

It is also possible to use the "named parameters" syntax:

```boa
let origin = Point2D(x=0, y=0)
```

## Accessing and modifying structure fields

Use the `.` operator to access and modify the fields of an instance of a structure:

```boa
let some_point = Point2D(x=2, y=-1)
println(some_point.x)
some_point.x = 5
```

## Recursive structures

In Boa, `struct`s cannot contain directly or transitively a member whose type is the `struct` itself, because its size in memory would be infinite.

The two following examples are invalid:

```boa
struct DirectlyRecursive:
    recursive_field: DirectlyRecursive
```

```boa
struct IndirectlyRecursive:
    indirectly_recursive_field: AnotherStructure

struct AnotherStructure:
    inner: IndirectlyRecursive
```

The fix is simple: use a pointer to the recursive type instead of the recursive type itself.

```boa
struct Correct:
    correct: *Correct
```
