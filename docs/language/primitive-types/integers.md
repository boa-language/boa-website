# Integers

Boa supports the following integer types:

|Type|Size (in bytes)|Signed ?|Minimum value|Maximum value|
|---|---|---|---|---|
|`u8`|1|No|0|255|
|`u16`|2|No|0|65535|
|`u32`|4|No|0|4294967295|
|`u64`|8|No|0|18446744073709551615|
|`i8`|1|Yes|-128|127|
|`i16`|2|Yes|-32768|32767|
|`i32`|4|Yes|-2147483648|2147483647|
|`i64`|8|Yes|-9223372036854775808|9223372036854775807|

## Integer literals and type inference

When creating a variable storing an integer without any type annotation, Boa will, in the following order:

* Assume it is a `i32` if the value fits inside a `i32`
* Assume it is a `i64` if the value fits inside a `i64`
* Assume it is a `u64` if the value fits inside a `u64`
* Raise a compilation error.

The following example illustrates this behavior:

```boa
let a = 12 // 12 fits into an i32, so a is an i32
let b = 2147483648 // b is too big for an i32 but fits in an i64 so it is an i64
let c = 9223372036854775808 // c is too big for an i64 but fits in an u64 so it is an u64
let d = 18446744073709551616 // d is too big for an u64 so a compilation error is raised
```

If the type of the variable is specified and the value does not fit inside it, a compilation error is directly raised:

```boa
let a: u8 = 256 // compilation error because 256 is too big to fit in an u8
```
