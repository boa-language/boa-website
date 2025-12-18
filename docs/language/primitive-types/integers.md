# Integers

Boa supports the following integer types:

|Type|Size (in bytes)|Signed ?|Minimum value|Maximum value|
|---|---|---|---|---|
|`u8`|1|No|0|255|
|`u16`|2|No|0|65535|
|`u32`|4|No|0|todo|
|`u64`|8|No|0|todo|
|`i8`|1|Yes|-128|127|
|`i16`|2|Yes|||
|`i32`|4|Yes|||
|`i64`|8|Yes|||

There are also the `usize` and `isize` types, whose sizes depend on the target architecture: 4 bytes (32 bits) on 32 bits CPUs, and 8 bytes (64 bits) on 64 bits CPUs.
