# Structures

The first type of user-definable types in Boa are `struct`s, similar to C/Rust.

## Simple example

Here is an example of a structure representing a 2-dimensional coordinate:

```boa
struct Point2D:
    x: i32
    y: i32
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
