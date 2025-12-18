# Enumerations

## Simple example

## Backing type

### Specifying a backing type

### Casting from/to the backing type

Use the casting operator `as` (TODO: link to section) to cast an `enum` to its backing type or a backing type value to the `enum` type.

```boa{11,12}
enum WeekOfDay: // the backing type is implicitly u8
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday

let today = WeekOfDay.Monday // OR: let today: WeekOfDay = Monday
let today_as_u8 = today as u8
let today_as_u8_as_weekday = today_as_u8 as WeekOfDay
```
