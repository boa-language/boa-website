# Pointers

Boa supports pointers, with some niceties (and some limitations as well) that languages such as C don't have. In fact, they are semantically similar to C++'s *references*. The pointer type in Boa is noted `*T`, where `T` is the pointed type.

## Simple example

```boa
let i = 12
let pi = &i
pi = 15 // automatic dereferencement! 'i' has been updated
```

## Automatic derefencement

## Limitations

### No `null` pointers

In Boa, pointers must point to a valid address, so a `*T` cannot be `null` (note that `null` is not a Boa keyword). Use an *optional pointer* `?*T` (see the section about optionals for more information) to simulate a `null` pointer.

### No built-in pointer arithmetic

There is no pointer arithmetic built-in in the language, but the standard library has functions to do so.
